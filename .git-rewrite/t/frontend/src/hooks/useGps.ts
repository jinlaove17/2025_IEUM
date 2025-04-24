import { getDistance } from "@/utils/math"
import { useEffect, useRef, useState } from "react"

const useGps = () => {
  const [currentPosition, setCurrentPosition] = useState({
    lat: 37.501286,
    lng: 127.0396029,
  })
  const currentPositionRef = useRef({
    lat: 37.501286,
    lng: 127.0396029,
  })
  const lastFetchedPositionRef = useRef({
    lat: currentPositionRef.current.lat,
    lng: currentPositionRef.current.lng,
  }) // 존재하지 않는 위경도로 설정하여 초기에 20m이상 차이가 나도록 설정
  const watchId = useRef<number | null>(null)
  const isDenied = useRef(true)

  const getCurrentPosition = async () => {
    return new Promise<void>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          currentPositionRef.current = lastFetchedPositionRef.current = newPosition
          setCurrentPosition(newPosition)
          resolve()
        },
        (error) => {
          alert(`현재 위치를 가져올 수 없음: ${error}`)
          reject(error)
        },
      )
    })
  }

  const startWatchingPosition = () => {
    watchId.current = navigator.geolocation.watchPosition(
      (pos) => {
        const newPosition = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        }
        let distance = getDistance(
          currentPositionRef.current.lat,
          currentPositionRef.current.lng,
          newPosition.lat,
          newPosition.lng,
        )

        // 1m 단위로 현재 위치를 갱신 => 마커에 반영
        if (distance < 1) {
          return
        }

        currentPositionRef.current = newPosition
        setCurrentPosition(newPosition)

        distance = getDistance(
          currentPositionRef.current.lat,
          currentPositionRef.current.lng,
          lastFetchedPositionRef.current.lat,
          lastFetchedPositionRef.current.lng,
        )
        // 20m 단위로 마지막 API 호출 위치를 갱신 => 주소 및 게시글 조회에 사용
        if (distance >= 20) {
          lastFetchedPositionRef.current = newPosition
        }
      },
      (error) => {
        console.error("위치 감지 실패:", error)
      },
      {
        enableHighAccuracy: true, // GPS를 사용하여 보다 정확한 위치 감지
      },
    )
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation API가 지원되지 않습니다.")
      return
    }

    const prepareGps = async () => {
      try {
        const permission = await navigator.permissions.query({ name: "geolocation" })

        // 권한 변경 감지 핸들러 등록
        permission.onchange = async () => {
          if (permission.state === "granted") {
            isDenied.current = false
            await getCurrentPosition()
            startWatchingPosition()
          }
        }

        if (permission.state === "denied") {
          alert("위치 권한이 거부되었습니다. 설정에서 활성화 해주세요.")
        } else {
          isDenied.current = false
          await getCurrentPosition()
          startWatchingPosition()
        }
      } catch (error) {
        alert(`권한 확인 중 오류 발생: ${error}`)
      }
    }

    prepareGps()

    return () => {
      if (watchId.current) {
        navigator.geolocation.clearWatch(watchId.current)
      }
    }
  }, [])

  return {
    isDenied: isDenied.current,
    currentPosition,
    lastFetchedPosition: lastFetchedPositionRef.current,
  }
}

export default useGps
