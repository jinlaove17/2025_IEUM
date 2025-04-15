from fastapi import Request
import time
import httpx
from fastapi.responses import JSONResponse

TOKEN_CHECK_URL = "https://j12a407.p.ssafy.io/api/users"
SUPER_TOKEN = "b31f9c3e8a94276d2fc1b5a9fd91c6ebfa4b72830f8f5a1d9b7e34c821c7e2d6"
EXCLUDE_PATHS = ["/docs", "/openapi.json"]


async def loginMiddleware(
        request: Request,
        call_next
):
    if request.url.path in EXCLUDE_PATHS:
        return await call_next(request)

    token = request.headers.get("Authorization")

    if not token:
        return JSONResponse(status_code=401,
                            content={
                                "code": "B4011",
                                "message": "인증에 실패하였습니다."
                            })

    if token == SUPER_TOKEN:
        return await call_next(request)

    try:
        async with httpx.AsyncClient() as client:
            auth_response = await client.get(
                TOKEN_CHECK_URL,
                headers={"Authorization": token},
                timeout=5.0
            )

        if auth_response.status_code != 200:
            return JSONResponse(
                status_code=auth_response.status_code,
                content=auth_response.json()
            )

    except httpx.RequestError as e:
        return JSONResponse(status_code=503,
                            content={
                                "code": "B5031",
                                "message": "인증서버와의 통신이 원활하지 않습니다."
                            })

    response = await call_next(request)
    return response