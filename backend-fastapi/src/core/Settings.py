from functools import lru_cache
from pydantic_settings  import BaseSettings

class Settings(BaseSettings):
    EMOTION_MODEL_NAME: str = "moomu/emotion-detection"
    EMOTION_LABELS_PATH: str = "src/emotion_detection/domain/EmotionLabelEncoder.pkl"
    CURSE_MODEL_NAME: str = "moomu/curse_detection"
    CURSE_LABELS: list = ["FALSE", "TRUE"]

@lru_cache(maxsize=None)
def getSettings():
    return Settings()