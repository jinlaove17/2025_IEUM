import type { ReactNode } from "react"

import useDevice from "@/hooks/useDevice"
interface BaseLayoutProps {
  children: ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const { isMobile } = useDevice()
  return (
    <div
      className={`flex relative flex-col min-h-screen max-w-[600px] mx-auto ${!isMobile ? "border-x border-em-gray-sm" : ""}`}>
      {children}
    </div>
  )
}
export default BaseLayout
