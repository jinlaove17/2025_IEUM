import numpy as np

from src.common.config.QdrantConfig import VECTOR_DIM


class VectorUtil:
    @staticmethod
    def smooth_one_hot(index: int, size: int, smooth_value: float = 0.02):
        vec = np.full(size, smooth_value)
        vec[index] = 1.0 - smooth_value * (size - 1)
        return vec

    @staticmethod
    def update_music_vector_by_emotion(old_vector, selected_emotion_index, update_count, smooth_value=0.02):
        user_vec = VectorUtil.smooth_one_hot(selected_emotion_index, len(old_vector), smooth_value)
        alpha = 1 / (update_count + 1)
        updated = (1 - alpha) * np.array(old_vector) + alpha * user_vec
        return updated

    @staticmethod
    def get_random_vector():
        random_vector = np.random.randn(VECTOR_DIM)
        return random_vector / np.linalg.norm(random_vector)