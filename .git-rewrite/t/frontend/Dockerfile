# 빌드 단계
FROM node:22-alpine AS builder
WORKDIR /app

# pnpm 설치 (corepack 사용)
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

# package.json과 lock 파일 복사 후 종속성 설치
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# 프로젝트 파일 복사 및 Vite 빌드 실행
COPY . .
RUN pnpm build

FROM nginx:alpine AS runner

# 빌드 결과물 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# 사용자 정의 Nginx 설정 파일 복사
COPY default.conf /etc/nginx/conf.d/default.conf

# 포트 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]