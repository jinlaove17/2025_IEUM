from fastapi import APIRouter, Depends
from pydantic import BaseModel

from src.emotion_detection.application.EmotionDetectionService import EmotionDetectionService, getEmotionDetectionService

emotionDetectionController = APIRouter(
    prefix="/detection/emotion",
    tags=["detection"]
)

class PredictEmotionRequest(BaseModel):
    text: str

@emotionDetectionController.post("")
async def predict_emotion(
        request: PredictEmotionRequest,
        service: EmotionDetectionService = Depends(getEmotionDetectionService)
):
    response = service.predict(text=request.text)
    return response
