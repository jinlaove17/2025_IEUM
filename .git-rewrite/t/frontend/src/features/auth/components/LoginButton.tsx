import EmButton from "@/components/EmButton/EmButton"
import useOAuthLoginLink from "@/features/auth/hooks/useOAuthLoginLink"
import { LoginProvider } from "@/features/auth/types/auth.type"

interface LoginButtonProps {
  data: LoginProvider
}

const LoginButton = ({ data }: LoginButtonProps) => {
  const { id, name, image, backgroundColor, provider } = data
  const loginLink = useOAuthLoginLink(provider)

  const handleLogin = () => {
    console.log("로그인 URL", loginLink)
    window.location.href = loginLink
  }

  return (
    <EmButton
      key={id}
      onClick={handleLogin}
      style={{ backgroundColor }}
      className={"flex items-center justify-center w-full gap-2 text-em-black"}>
      <img src={image} alt={name} className="w-8" />
      <span className="text-base font-semibold">{name}로 시작하기</span>
    </EmButton>
  )
}

export default LoginButton
