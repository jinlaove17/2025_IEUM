import asyncio

from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi
from fastapi.security import HTTPBearer

from src.common.middleware.LoginMiddleware import loginMiddleware
from src.core.startUpEvent import startUpEvent
from src.curse_detection.presentation.CurseDetectionController import curseDetectionController
from src.dummy.presentation.DummyController import dummyController
from src.music_recommendation.presentation.InitCollection import initController
from src.music_recommendation.presentation.MusicRecommendationController import musicRecommendationController
from src.emotion_detection.presentation.EmotionDetectionController import emotionDetectionController
from src.music_recommendation.service.TaskHandler import task_worker

app = FastAPI()
app.add_event_handler("startup", startUpEvent)
app.middleware("http")(loginMiddleware)

security = HTTPBearer()
def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    openapi_schema = get_openapi(
        title="이음",
        version="1.0.0",
        description="Swagger with Bearer Token",
        routes=app.routes,
    )
    openapi_schema["components"]["securitySchemes"] = {
        "bearerAuth": {
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT",  # 생략 가능
        }
    }
    for path in openapi_schema["paths"].values():
        for method in path.values():
            method.setdefault("security", []).append({"bearerAuth": []})
    app.openapi_schema = openapi_schema
    return openapi_schema

@app.on_event("startup")
async def startup_event():
    asyncio.create_task(task_worker())

app.openapi = custom_openapi
app.include_router(dummyController)
app.include_router(musicRecommendationController)
app.include_router(emotionDetectionController)
app.include_router(curseDetectionController)
app.include_router(initController)

# @app.on_event("startup")
# def on_startup():
#     init_collection()
