import { LoginProvider } from "./types/auth.type"

import kakaoIcon from "@/assets/kakao_icon.svg"

export const LOGIN_PROVIDERS: LoginProvider[] = [
  {
    id: 1,
    name: "카카오",
    provider: "kakao",
    image: kakaoIcon,
    backgroundColor: "#FEE500",
  },
]
