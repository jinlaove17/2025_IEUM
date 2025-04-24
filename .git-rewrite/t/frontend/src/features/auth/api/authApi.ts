import apiClient from "@/utils/http-common"

// 로그아웃
export const fetchLogout = async () => {
  const response = await apiClient.post("/auth/logout")
  return response.data
}
