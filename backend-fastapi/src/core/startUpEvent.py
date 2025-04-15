from src.curse_detection.application.CurseDetectionService import getCurseDetectionService
from src.emotion_detection.application.EmotionDetectionService import getEmotionDetectionService

emotionDetectionService = None
curseDetectionService = None

def startUpEvent():
    global emotionDetectionService,\
        curseDetectionService
    emotionDetectionService = getEmotionDetectionService()
    curseDetectionService = getCurseDetectionService()