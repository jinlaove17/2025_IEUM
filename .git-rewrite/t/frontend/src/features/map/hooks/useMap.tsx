import { RefObject, useEffect, useRef } from "react"

interface useMapProps {
  initLocation: { lat: number; lng: number }
  mapRef: RefObject<HTMLDivElement | null>
}

const useMap = ({ initLocation, mapRef }: useMapProps) => {
  const map = useRef<naver.maps.Map>(null)

  useEffect(() => {
    if (!mapRef.current) {
      return
    }

    map.current = new window.naver.maps.Map(mapRef.current, {
      center: new window.naver.maps.LatLng(initLocation.lat, initLocation.lng),
      zoom: 15,
    })
  }, [mapRef.current])

  return { map }
}

export default useMap
