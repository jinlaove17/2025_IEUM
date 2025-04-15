# Python 3.11 슬림 이미지 사용
FROM python:3.11-slim

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 설치
COPY dependancy.txt .
RUN pip install --no-cache-dir -r dependancy.txt

# 전체 프로젝트 복사
COPY . .

# FastAPI 앱 실행 (hot reload는 dev 환경에서만)
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]