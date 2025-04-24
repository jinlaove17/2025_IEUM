import axios from "axios"

const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 1000 * 10, // 10초
  withCredentials: true,
})

// 요청 인터셉터
apiClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => {
    switch (response.status) {
      case 401: // 인증 에러
        localStorage.removeItem("accessToken")
        window.location.href = "/login"
        break
      case 403:
        alert("접근 권한이 없습니다.")
        break
    }
    return response
  },
  (error) => Promise.reject(error),
)

export default apiClient
