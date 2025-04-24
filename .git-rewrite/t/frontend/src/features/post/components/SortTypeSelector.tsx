import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

interface SortTypeSelectorProps {
  contents: { label: string; sortType: string }[]
  className?: string
}

const SortTypeSelector = ({ contents, className }: SortTypeSelectorProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedType = searchParams.get("sortType") || contents[0].sortType

  useEffect(() => {
    return () => {
      // 언마운트 시에 모든 QueryParameter 삭제
      setSearchParams(new URLSearchParams())
    }
  }, [])

  const handleChange = (sortType: string) => {
    setSearchParams((prev) => {
      prev.set("sortType", sortType)
      return prev
    })
  }

  return (
    <ul className={`flex items-center gap-6 px-5 py-3 bg-em-white ${className}`}>
      {contents.map((item) => (
        <li key={item.label}>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={item.sortType}
              value={item.sortType}
              checked={selectedType === item.sortType}
              onChange={() => handleChange(item.sortType)}
              className="hidden"
            />
            <div
              className={`size-1 rounded-full ${selectedType === item.sortType ? "bg-em-black" : "bg-em-gray"}`}
            />
            <p
              className={`text-sm font-semibold ${selectedType === item.sortType ? "text-em-black" : "text-em-gray"}`}>
              {item.label}
            </p>
          </label>
        </li>
      ))}
    </ul>
  )
}

export default SortTypeSelector
