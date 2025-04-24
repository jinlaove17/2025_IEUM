import { LOGIN_PROVIDERS } from "@/features/auth/constants"
import { useQuery } from "@tanstack/react-query"
import { fetchProfile } from "../api/profileApi"
import { ProfileWithImage } from "../types/ProfileWithImage"

export const useProfileData = () => {
  return useQuery<ProfileWithImage>({
    queryKey: ["profile"],
    queryFn: async () => {
      const data = await fetchProfile()

      if (!data) {
        throw new Error("Profile data is undefined")
      }

      const provider = LOGIN_PROVIDERS.find((p) => p.provider === data.provider)

      return {
        ...data,
        providerImage: provider?.image ?? "", // `undefined`를 방지하기 위해 기본값 설정
      } as ProfileWithImage
    },
    staleTime: 1000 * 60 * 5, // 5분간 캐시 유지
  })
}

export default useProfileData
