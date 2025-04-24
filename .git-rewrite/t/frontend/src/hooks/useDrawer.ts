import { useEffect, useState } from "react"

const useDrawer = (drawerKey: string) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handlePopstate = () => {
      setIsOpen(false)
    }

    window.addEventListener("popstate", handlePopstate)
    return () => {
      window.removeEventListener("popstate", handlePopstate)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      history.pushState({ drawerKey }, "", window.location.pathname)
    } else {
      if (history.state.drawerKey === drawerKey) {
        history.back()
      }
    }
  }, [isOpen])

  return { isOpen, setIsOpen }
}

export default useDrawer
