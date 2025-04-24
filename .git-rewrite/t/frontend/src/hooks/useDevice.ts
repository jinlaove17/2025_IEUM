import { useMemo } from "react"

const useDevice = () => {
  const device = useMemo(() => {
    const userAgent = navigator.userAgent.toLowerCase()

    // 운영체제 확인
    const isIOS =
      userAgent.includes("iphone") || userAgent.includes("ipad") || userAgent.includes("ipod")

    // 모바일 or 데스크탑 확인
    const isMobile = userAgent.includes("mobile")

    return { isIOS, isMobile }
  }, [])

  return device
}

export default useDevice
