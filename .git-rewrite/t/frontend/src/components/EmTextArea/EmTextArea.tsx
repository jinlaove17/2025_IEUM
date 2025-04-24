import { ChangeEvent, TextareaHTMLAttributes, useRef } from "react"

import { cn } from "@/utils/cn"

interface EmTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  placeholder?: string
  maxLength?: number
  textState: string // 텍스트 상태 전달
  onTextChange: (_text: string) => void // 텍스트 상태 변경
}

const EmTextArea = ({
  className,
  placeholder = "이곳에 텍스트를 입력해 주세요.",
  maxLength = 500,
  textState,
  onTextChange,
  ...props
}: EmTextAreaProps) => {
  const countRef = useRef<HTMLSpanElement>(null)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    const { length } = value

    // 최대 길이 체크
    if (countRef.current) {
      if (length > maxLength) {
        countRef.current.classList.add("text-em-anger")
      } else {
        countRef.current.classList.remove("text-em-anger")
      }
      countRef.current.textContent = length.toString()
    }

    // 텍스트 상태 변경
    onTextChange(value)
  }
  return (
    <div className="w-full h-full bg-em-white flex flex-col gap-2 p-4 border border-em-gray-md rounded-xl">
      <textarea
        value={textState}
        onChange={handleChange}
        maxLength={maxLength}
        className={cn("outline-none resize-none w-full h-full min-h-60", className)}
        {...props}
        placeholder={placeholder}
      />
      <p className="flex justify-end items-center gap-2 text-sm text-em-gray">
        <span ref={countRef}>0</span>
        <span className="">/ {maxLength}</span>
      </p>
    </div>
  )
}

export default EmTextArea
