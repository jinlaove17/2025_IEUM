import { useCallback, useEffect, useRef, useState } from "react"

import { Tab } from "@/types/Tab"

interface TabsProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (_tabValue: string) => void
}

const Tabs= ({ tabs, activeTab, onTabChange }: TabsProps) => {
  const [indicatorStyle, setIndicatorStyle] = useState<{ width: string; transform: string }>({
    width: "0px",
    transform: "translateX(0px)",
  })
  const containerRef = useRef<HTMLDivElement>(null)

  const updateIndicator = useCallback(() => {
    const index = tabs.findIndex((tab) => tab.value === activeTab)

    if (!containerRef.current) {
      return
    }

    const containerWidth = containerRef.current.offsetWidth
    const tabWidth = containerWidth / tabs.length

    setIndicatorStyle({
      width: `${tabWidth}px`,
      transform: `translateX(${index * tabWidth}px)`,
    })
  }, [tabs, activeTab])

  useEffect(() => {
    updateIndicator()

    window.addEventListener("resize", updateIndicator)

    return () => {
      window.removeEventListener("resize", updateIndicator)
    }
  }, [updateIndicator])

  return (
    <div ref={containerRef} className="relative flex justify-around border-b border-em-gray">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`flex-1 py-3 text-sm transition-colors duration-200 ${
            tab.value === activeTab ? " text-em-black font-semibold" : " text-em-gray"
          }`}
          onClick={() => onTabChange(tab.value)} // 탭을 클릭하면 부모 컴포넌트로 상태 변경 요청
        >
          {tab.label}
        </button>
      ))}

      {/* 슬라이딩 인디케이터 */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-em-black transition-transform duration-300 ease-in-out"
        style={indicatorStyle}
      />
    </div>
  )
}

export default Tabs
