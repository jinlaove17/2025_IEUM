from fastapi import APIRouter, HTTPException
import numpy as np
from qdrant_client.models import PointStruct

from common import EMOTIONS, COLLECTION_NAME, client

dummy_router = APIRouter(
    prefix="/dummy",
    tags=["🎵 Dummy Data"]
)

@dummy_router.post("/init")
def insert_dummy_songs():
    np.random.seed(42)  # 테스트 재현성

    for song_id in range(1, 101):
        raw_vec = np.random.rand(len(EMOTIONS))
        vec = raw_vec / np.sum(raw_vec)  # softmax-like 정규화
        title = f"더미곡 #{song_id:03d}"
        artist = f"가수 {song_id:03d}"
        spotify_url = f"https://open.spotify.com/dummy_album/{song_id:03d}"
        image_url = f"https://placehold.co/300x300?text=Dummy+{song_id:03d}"

        client.upsert(
            collection_name=COLLECTION_NAME,
            points=[PointStruct(
                id=song_id,
                vector=vec.tolist(),
                payload={
                    "title": title,
                    "artistName": artist,
                    "spotifyAlbumUrl": spotify_url,
                    "albumImageUrl": image_url,
                    "update_count": 1
                }
            )]
        )

    return {"message": "더미 음악 100개 등록 완료"}

@dummy_router.get("/count")
def get_dummy_count():
    info = client.get_collection(COLLECTION_NAME)
    return {"총 데이터 수": info.points_count}

@dummy_router.delete("/clear")
def clear_dummy_collection():
    try:
        client.delete_collection(collection_name=COLLECTION_NAME)
        client.recreate_collection(
            collection_name=COLLECTION_NAME,
            vectors_config={"size": len(EMOTIONS), "distance": "Cosine"}
        )
        return {"message": "전체 데이터 초기화 완료"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))