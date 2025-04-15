from fastapi import APIRouter
from qdrant_client.http.models import Distance, VectorParams
from src.common.config import QdrantConfig

# 설정
COLLECTION_NAME = QdrantConfig.COLLECTION_NAME
VECTOR_DIM = QdrantConfig.VECTOR_DIM
qdrantClient = QdrantConfig.qdrantClient

initController = APIRouter(
    prefix="/collection",
    tags=["Init Collection"]
)
@initController.post("/init")
def init_collection():
    # 1. 현재 컬렉션 목록 조회
    collections = qdrantClient.get_collections().collections
    existing_names = [col.name for col in collections]

    # 2. 없으면 생성
    if COLLECTION_NAME not in existing_names:
        print(f"컬렉션 '{COLLECTION_NAME}'이 없어서 새로 생성합니다.")
        qdrantClient.create_collection(
            collection_name=COLLECTION_NAME,
            vectors_config=VectorParams(size=VECTOR_DIM, distance=Distance.COSINE)
        )
    else:
        print(f"컬렉션 '{COLLECTION_NAME}'이 이미 존재합니다.")

@initController.delete("/delete")
def delete_collection(name):
    collections = qdrantClient.delete_collection(name)
    return {f"컬렉션 '{name}'이 삭제되었습니다."}