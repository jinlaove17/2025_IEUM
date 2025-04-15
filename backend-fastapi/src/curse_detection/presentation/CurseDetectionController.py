from fastapi import APIRouter, Depends
from pydantic import BaseModel

from src.curse_detection.application.CurseDetectionService import CurseDetectionService, getCurseDetectionService

curseDetectionController = APIRouter(
    prefix="/detection/curse",
    tags=["detection"]
)

class DetectCurseRequest(BaseModel):
    text: str

@curseDetectionController.post("")
async def predict_emotion(
        request: DetectCurseRequest,
        service: CurseDetectionService = Depends(getCurseDetectionService)
):
    response = service.predict(text=request.text)
    return response
