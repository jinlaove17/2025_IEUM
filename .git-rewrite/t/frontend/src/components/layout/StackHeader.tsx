import { ChevronLeftIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

const StackHeader = () => {
  // Todo: Header 타이틀을 zustand로 관리하는 것에 대하여 논의
  const title = "여기는 무엇이 좋을꼬"

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <header className="flex items-center justify-between h-full px-5">
      <div onClick={handleClick} className="cursor-pointer">
        <ChevronLeftIcon className="w-8 h-8" />
      </div>

      <div>
        <h3 className="text-xl font-bold text-em-black">{title}</h3>
      </div>
      <div></div>
    </header>
  )
}
export default StackHeader
