import uuid
from asyncio import Queue, Lock
from typing import Optional
import numpy as np
from fastapi import HTTPException
from pydantic import BaseModel
from qdrant_client.http.models import PointStruct

from src.common.EmotionLabels import EMOTIONS
from src.common.config.QdrantConfig import qdrantClient, COLLECTION_NAME, VECTOR_DIM
from src.music_recommendation.util.VectorUtil import VectorUtil

import logging

task_queue = Queue()
processing_lock = Lock()
logger = logging.getLogger("uvicorn")
logger.setLevel(logging.INFO)

class UpsertSongRequest(BaseModel):
    key: str
    title: str
    artistName: str
    spotifyAlbumUrl: Optional[str]
    albumImageUrl: Optional[str]
    emotion: str

async def task_worker():
    while True:
        task = await task_queue.get()
        async with processing_lock:
            await upsert_song(task)
        task_queue.task_done()

async def upsert_song(req: UpsertSongRequest):
    if req.emotion not in EMOTIONS:
        raise HTTPException(status_code=400, detail="유효하지 않은 감정입니다.")

    point_id = get_point_id_from_key(req.key)
    emotion_index = EMOTIONS.index(req.emotion)
    result = qdrantClient.retrieve(COLLECTION_NAME, [point_id], with_vectors=True)

    if not result:
        vector = VectorUtil.smooth_one_hot(emotion_index, VECTOR_DIM, 0.02)
        add_song(req,vector)
        logger.info(f"key={req.key} 등록 완료")
        return

    old_vector = np.array(result[0].vector)
    count = result[0].payload.get("update_count", 1)
    new_vector = VectorUtil.update_music_vector_by_emotion(old_vector, emotion_index, count)

    qdrantClient.upsert(
        collection_name=COLLECTION_NAME,
        points=[PointStruct(
            id=point_id,
            vector=new_vector.tolist(),
            payload={
                "title": result[0].payload["title"],
                "artistName": result[0].payload["artistName"],
                "spotifyAlbumUrl": result[0].payload["spotifyAlbumUrl"],
                "albumImageUrl": result[0].payload["albumImageUrl"],
                "update_count": count + 1
            }
        )]
    )
    logger.info(f"감정 '{req.emotion}' 반영됨 → {result[0].payload['title']}")
    return

def add_song(req: UpsertSongRequest, vector):
    point_id = get_point_id_from_key(req.key)
    if len(vector) != VECTOR_DIM:
        raise HTTPException(status_code=400, detail="벡터 차원이 맞지 않습니다.")

    qdrantClient.upsert(
        collection_name=COLLECTION_NAME,
        points=[PointStruct(
            id=point_id,
            vector=vector,
            payload={
                "title": req.title,
                "artistName": req.artistName,
                "spotifyAlbumUrl": req.spotifyAlbumUrl,
                "albumImageUrl": req.albumImageUrl,
                "update_count": 1
            }
        )]
    )
    logger.info(f"등록 완료: {req.title}")

def get_point_id_from_key(key: str):
    return str(uuid.uuid5(uuid.NAMESPACE_DNS, key))