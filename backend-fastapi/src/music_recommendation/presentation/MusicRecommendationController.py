from fastapi import APIRouter, HTTPException
import numpy as np
from qdrant_client.models import PointIdsList
from pydantic import BaseModel, Field
from src.common.config.QdrantConfig import qdrantClient, COLLECTION_NAME
from src.common.EmotionLabels import EMOTIONS
from src.music_recommendation.service.TaskHandler import task_queue, UpsertSongRequest, get_point_id_from_key
from src.music_recommendation.util.VectorUtil import VectorUtil
from src.common.config import QdrantConfig
import logging

musicRecommendationController = APIRouter(
    prefix="/recommendation",
    tags=["recommendation"]
)

logger = logging.getLogger("uvicorn")
logger.setLevel(logging.INFO)

VECTOR_DIM = QdrantConfig.VECTOR_DIM

class EmotionCountRequest(BaseModel):
    emotionCounts: dict
    limit: int = Field(default=20)

@musicRecommendationController.delete("/song/{key}")
def delete_song(key: str):
    try:
        result = qdrantClient.retrieve(collection_name=COLLECTION_NAME, ids=[key])
        if not result:
            raise HTTPException(status_code=404, detail="음악을 찾을 수 없습니다.")

        qdrantClient.delete(
            collection_name=COLLECTION_NAME,
            points_selector=PointIdsList(points=[key])
        )
        logger.info(f"key={key} 삭제 완료")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@musicRecommendationController.post("/upsert")
async def enqueue_upsert(req: UpsertSongRequest):
    await task_queue.put(req)
    logger.info(f"요청 등록 완료: {req}")

@musicRecommendationController.get("/info")
def get_data_list(offset: int=0, limit: int=100):
    vectors = []

    scroll_result = qdrantClient.scroll(
        collection_name=COLLECTION_NAME,
        offset=offset,
        limit=limit,
        with_payload=True,
        with_vectors=True
    )

    for point in scroll_result[0]:
        vectors.append({
            "id": point.id,
            "title": point.payload.get("title"),
            "artistName": point.payload.get("artistName"),
            "spotifyAlbumUrl": point.payload.get("spotifyAlbumUrl"),
            "albumImageUrl": point.payload.get("albumImageUrl"),
            "update_count": point.payload.get("update_count", 0),
            "vector": point.vector
        })

    return vectors

@musicRecommendationController.post("/my")
def recommend_music(req: EmotionCountRequest):
    vec = np.array([req.emotionCounts.get(em, 0) for em in EMOTIONS], dtype=np.float32)
    if vec.sum() == 0:
        random_vector = VectorUtil.get_random_vector()
        random_result = qdrantClient.search(
            collection_name=COLLECTION_NAME,
            query_vector=random_vector,
            limit=req.limit
        )
        return {
            "recommendations": [
                {
                    "title": res.payload["title"],
                    "artistName": res.payload["artistName"],
                    "spotifyAlbumUrl": res.payload["spotifyAlbumUrl"],
                    "albumImageUrl": res.payload["albumImageUrl"],
                    "score": round(res.score, 3)
                }
                for res in random_result
            ]
        }

    normalized_vec = vec / vec.sum()

    results = qdrantClient.search(
        collection_name=COLLECTION_NAME,
        query_vector=normalized_vec.tolist(),
        limit=req.limit
    )

    return {
        "recommendations": [
            {
                "title": res.payload["title"],
                "artistName": res.payload["artistName"],
                "spotifyAlbumUrl": res.payload["spotifyAlbumUrl"],
                "albumImageUrl": res.payload["albumImageUrl"],
                "score": round(res.score, 3)
            }
            for res in results
        ]
    }
