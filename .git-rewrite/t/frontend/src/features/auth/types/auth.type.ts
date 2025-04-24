export type OAuthProvider = "kakao" | "google" | "naver"

export interface LoginProvider {
  id: number
  name: string
  image: string
  backgroundColor: string
  provider: OAuthProvider
}
