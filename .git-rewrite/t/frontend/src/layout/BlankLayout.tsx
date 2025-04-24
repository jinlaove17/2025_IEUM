import { Outlet } from "react-router-dom"

import BaseLayout from "@/layout/BaseLayout"

const BlankLayout = () => {
  return (
    <BaseLayout>
      <main className="flex-1">
        <Outlet />
      </main>
    </BaseLayout>
  )
}

export default BlankLayout
