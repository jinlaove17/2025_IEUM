from qdrant_client import QdrantClient

COLLECTION_NAME = "music"
qdrantClient = QdrantClient(host="j12a407.p.ssafy.io", port=3333)
VECTOR_DIM = 6