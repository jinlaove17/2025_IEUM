import { ReactNode } from "react"

import { cn } from "@/utils/cn"

interface EmSectionProps {
  children?: ReactNode
  hasBorder?: boolean
  hasRound?: boolean
  className?: string
}

const EmSection = ({
  children,
  hasBorder = false,
  hasRound = false,
  className,
}: EmSectionProps) => {
  return (
    <section
      className={cn(
        "w-full h-full flex flex-col gap-5 p-5 transition-all duration-200",
        "bg-em-white",
        hasRound && "rounded-xl",
        hasBorder && "border border-em-gray",
        className,
      )}>
      {children}
    </section>
  )
}

interface SectionHeaderProps {
  title?: string
  description?: string
  headerRight?: string
}

const EmSectionHeader = ({ title, description, headerRight }: SectionHeaderProps) => {
  return (
    <header className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        {title && <h3 className="text-em-black text-xl font-bold tracking-tight">{title}</h3>}
        {headerRight && <div className="text-sm text-em-black/60">{headerRight}</div>}
      </div>
      {description && <p className="text-em-gray/80 text-sm leading-relaxed">{description}</p>}
    </header>
  )
}

interface SectionFooterProps {
  children?: ReactNode
}

const EmSectionFooter = ({ children }: SectionFooterProps) => {
  return <footer className="">{children}</footer>
}

// 서브 컴포넌트 패턴 적용
EmSection.Header = EmSectionHeader
EmSection.Footer = EmSectionFooter

export default EmSection
