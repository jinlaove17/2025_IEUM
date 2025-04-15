from functools import lru_cache

from fastapi import Depends
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import torch.nn.functional as F
import pickle

from src.core.Settings import getSettings

settings = getSettings()

@lru_cache(maxsize=None)
def getCurseDetectionService():
    return CurseDetectionService(settings.CURSE_MODEL_NAME)

class CurseDetectionService:
    def __init__(self, model_path: str):
        self.label_list = settings.CURSE_LABELS
        self.tokenizer = AutoTokenizer.from_pretrained(settings.EMOTION_MODEL_NAME)
        self.model = AutoModelForSequenceClassification.from_pretrained(model_path)
        self.model.eval()

    def predict(self, text: str):
        text = text.replace("\n", " ").replace("\r", " ")
        inputs = self.tokenizer(text, return_tensors="pt").to(self.model.device)
        with torch.no_grad():
            logits = self.model(**inputs).logits
            probs = F.softmax(logits, dim=-1).squeeze().tolist()

        pred_idx = torch.argmax(logits).item()
        isCurse = False if self.label_list[pred_idx] == "FALSE" else True
        return {
            "isCurse": isCurse,
            "confidence": probs[pred_idx],
            "allProbs": dict(zip(self.label_list, probs))
        }