import { MapPinIcon } from "lucide-react"

import profileImage from "@/assets/dog-face.svg"
import EmojiButton from "./EmojiButton"

interface PostItemProps {
  location: string
  date: string
  author: string
  content: string
  emoji: {
    happy: number
    sad: number
    love: number
    angry: number
    confident: number
  }
}

const PostItem = ({ location, date, author, content, emoji }: PostItemProps) => {
  return (
    <div className="flex flex-col gap-3 p-4 bg-em-white">
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <MapPinIcon className="size-5 stroke-red-500" />
          <p className="text-sm font-semibold">{location}</p>
        </div>

        <p className="text-sm text-em-gray">{date}</p>
      </div>

      <div className="flex items-center gap-2">
        <img src={profileImage} alt="프로필 사진" className="rounded-full size-8" />
        <p className="font-semibold text-em-surprise">{author}</p>
      </div>

      <div className="px-2 mb-6 break-all whitespace-pre-wrap min-h-32">{content}</div>

      <div className="flex items-center gap-4">
        {Object.entries(emoji).map(([k, v]) => (
          <EmojiButton key={k} emotionName={k as keyof typeof emoji} count={v as number} />
        ))}
      </div>
    </div>
  )
}

export default PostItem
