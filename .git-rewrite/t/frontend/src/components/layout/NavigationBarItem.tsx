import { ReactNode } from "react"
import { NavLink } from "react-router-dom"

interface NavigationBarItemProps {
  data: {
    id: number
    name: string
    icon: ReactNode
    path: string
  }
}

const NavigationBarItem = ({ data }: NavigationBarItemProps) => {
  const { id, path, name, icon } = data

  return (
    <div className="flex-1" key={id}>
      <NavLink
        to={path}
        key={id}
        className={({ isActive }) => (isActive ? "text-em-black" : "text-em-gray")}>
        <div className="flex flex-col items-center justify-center w-full gap-1">
          <span className="size-5">{icon}</span>
          <span className="text-xs">{name}</span>
        </div>
      </NavLink>
    </div>
  )
}
export default NavigationBarItem
