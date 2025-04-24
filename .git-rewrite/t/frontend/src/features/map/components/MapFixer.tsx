import useMap from "@/features/map/hooks/useMap"
import { useEffect, useRef } from "react"

interface MapFixerProps {
  location?: { lat: number; lng: number }
  className?: string
}

const MapFixer = ({
  location = { lat: 37.501286, lng: 127.0396029 },
  className,
}: MapFixerProps) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const { map } = useMap({ initLocation: location, mapRef })
  const rangeRef = useRef<naver.maps.Circle>(null)

  useEffect(() => {
    if (!map.current) {
      return
    }

    const radius = 100
    rangeRef.current = new naver.maps.Circle({
      map: map.current,
      center: new naver.maps.LatLng(location.lat, location.lng),
      radius,
      fillColor: "rgba(0, 255, 0, 0.1)",
      strokeColor: "rgba(0, 255, 0, 0.1)",
      strokeWeight: 1,
    })

    window.naver.maps.Event.addListener(map.current, "dragend", () => {
      if (map.current) {
        const projection = map.current.getProjection()
        const initCenter = new naver.maps.LatLng(location.lat, location.lng)
        const newCenter = map.current.getCenter()
        const distance = projection.getDistance(initCenter, newCenter)
        const color = distance > radius ? "rgba(255, 0, 0, 0.1)" : "rgba(0, 255, 0, 0.1)"

        rangeRef.current?.setOptions({
          center: initCenter,
          fillColor: color,
          strokeColor: color,
          strokeWeight: 1,
        })
      }
    })

    return () => {
      if (map.current) {
        window.naver.maps.Event.clearInstanceListeners(map.current)
      }
    }
  }, [map.current])

  return <div ref={mapRef} className={className} />
}

export default MapFixer
