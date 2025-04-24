import logo from "@/assets/em_logo_simple.svg"
import LoginButton from "@/features/auth/components/LoginButton"
import { LOGIN_PROVIDERS } from "@/features/auth/constants"

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-em-white">
      <section className="flex flex-col items-center justify-center flex-1 gap-3">
        <img src={logo} alt="로고" className="w-24 animate-pulse" />
        <div className="flex flex-col items-center justify-center gap-1 text-center text-em-black/40">
          <span>지금 당신이 계신 곳에</span>
          <span>다양한 속마음 확인해보세요.</span>
        </div>
      </section>
      <section className="flex flex-col items-center justify-start w-full gap-5 px-10 py-8 basis-1/5">
        <div className="flex flex-col items-center justify-center w-full gap-3">
          {LOGIN_PROVIDERS.map((data) => (
            <LoginButton key={data.id} data={data} />
          ))}
        </div>
        <span className="text-sm text-em-black/40">ⓒ 2025. 이음 All rights reserved</span>
      </section>
    </div>
  )
}
export default LoginPage
