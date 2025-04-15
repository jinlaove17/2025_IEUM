from functools import lru_cache

from fastapi import Depends
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import torch.nn.functional as F
import pickle
import os
from src.core.Settings import getSettings

settings = getSettings()

@lru_cache(maxsize=None)
def getEmotionDetectionService():
    return EmotionDetectionService(settings.EMOTION_MODEL_NAME)

class EmotionDetectionService:
    def __init__(self, model_path: str):
        with open(settings.EMOTION_LABELS_PATH, "rb") as f:
            data = pickle.load(f)
            self.label_list = data.classes_.tolist()
        self.tokenizer = AutoTokenizer.from_pretrained(model_path)
        self.model = AutoModelForSequenceClassification.from_pretrained(model_path)
        self.model.eval()

    def predict(self, text: str):
        text = text.replace("\n", " ").replace("\r", " ")
        inputs = self.tokenizer(text,
                                max_length=512,
                                truncation=True,
                                return_tensors="pt").to(self.model.device)
        with torch.no_grad():
            logits = self.model(**inputs).logits
            probs = F.softmax(logits, dim=-1).squeeze().tolist()

        pred_idx = torch.argmax(logits).item()
        return {
            "label": self.label_list[pred_idx],
            "confidence": probs[pred_idx],
            "all_probs": dict(zip(self.label_list, probs))
        }