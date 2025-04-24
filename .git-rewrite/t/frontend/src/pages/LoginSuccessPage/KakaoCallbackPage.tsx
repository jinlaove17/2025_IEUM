import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

import logo from "@/assets/em_logo_simple.svg"

const LoginSuccessPage = () => {
  const [searchParams] = useSearchParams()
  const accessToken = searchParams.get("accessToken")
  const navigate = useNavigate()

  useEffect(() => {
    try {
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken)
      }
    } catch (error) {
      console.error("로그인 실패", error)
      navigate("/login", { replace: true })
    } finally {
      setTimeout(() => {
        navigate("/", { replace: true })
      }, 2000)
    }
  }, [accessToken, navigate])

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-em-white">
        <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
          <img src={logo} alt="로고" className="w-24 animate-bounce" />
          <div className="font-bold animate-pulse">로그인 중...</div>
        </div>
      </div>
    </>
  )
}
export default LoginSuccessPage
