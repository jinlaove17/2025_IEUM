import { HomeIcon, UserIcon } from "lucide-react"
import { memo } from "react"

import NavigationBarItem from "@/components/layout/NavigationBarItem"

const navigationItems = [
  {
    id: 1,
    name: "홈",
    icon: <HomeIcon className="size-full" />,
    path: "/",
  },
  {
    id: 2,
    name: "마이페이지",
    icon: <UserIcon className="size-full" />,
    path: "/mypage",
  },
]
const MainNavigationBar = memo(
  () => {
    return (
      <nav className="flex items-center w-full h-full border-t border-em-gray-sm">
        {navigationItems.map((data) => (
          <NavigationBarItem key={data.id} data={data} />
        ))}
      </nav>
    )
  },
  () => true,
)

export default MainNavigationBar
