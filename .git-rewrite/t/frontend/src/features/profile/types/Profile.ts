import { OAuthProvider } from "@/features/auth/types/auth.type"

export interface Profile {
  userId: number
  profileImageUrl: string
  username: string
  provider: OAuthProvider
  socialId: string
}
