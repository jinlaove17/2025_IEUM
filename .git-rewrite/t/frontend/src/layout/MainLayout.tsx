import { Outlet } from "react-router-dom"

import MainHeader from "@/components/layout/MainHeader"
import MainNavigationBar from "@/components/layout/MainNavigationBar"
import useDevice from "@/hooks/useDevice"
import BaseLayout from "@/layout/BaseLayout"

const MainLayout = () => {
  const { isIOS } = useDevice()

  return (
    <BaseLayout>
      {/* header */}
      <div className="bg-em-white fixed top-0 max-w-[600px] w-full h-14">
        <MainHeader />
      </div>
      {/* main */}
      <main className="flex-1 mb-[var(--navigation-bar-height)] mt-[var(--header-height)]">
        <Outlet />
      </main>
      {/* navigation bar */}
      <div
        className={`bg-em-white fixed bottom-0 max-w-[600px] w-full h-16 ${isIOS ? "pb-2" : ""}`}>
        <MainNavigationBar />
      </div>
    </BaseLayout>
  )
}

export default MainLayout
