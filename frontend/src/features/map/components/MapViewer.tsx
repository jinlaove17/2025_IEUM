import useMap from "@/features/map/hooks/useMap"
import { ReactNode, useEffect, useRef } from "react"

interface MapViewerProps {
  isDenied: boolean
  location: { lat: number; lng: number }
  className?: string
  children?: (focusOnMarker: () => void) => ReactNode
}

const MapViewer = ({ isDenied, location, className, children }: MapViewerProps) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const userMarkerRef = useRef<naver.maps.Marker | null>(null)
  const searchRangeRef = useRef<naver.maps.Circle | null>(null)
  const { map } = useMap({ initLocation: location, mapRef })

  useEffect(() => {
    if (!map.current) {
      return
    }

    userMarkerRef.current = new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(location.lat, location.lng),
      map: map.current,
      icon: {
        content: `<div class="size-6 bg-red-500 border-4 border-white rounded-full" />`,
        anchor: new window.naver.maps.Point(12, 12),
      },
    })

    searchRangeRef.current = new naver.maps.Circle({
      map: map.current,
      center: new naver.maps.LatLng(location.lat, location.lng),
      radius: 250,
      fillColor: "rgba(0, 0, 0, 0.05)",
      strokeColor: "rgba(0, 0, 0, 0.05)",
      strokeWeight: 1,
    })
  }, [map.current])

  useEffect(() => {
    if (userMarkerRef.current) {
      userMarkerRef.current.setVisible(!isDenied)
    }

    if (searchRangeRef.current) {
      searchRangeRef.current.setVisible(!isDenied)
    }
  }, [isDenied])

  useEffect(() => {
    if (isDenied) {
      return
    }

    if (userMarkerRef.current) {
      userMarkerRef.current.setPosition(location)
    }

    if (searchRangeRef.current) {
      searchRangeRef.current.setCenter(location)
    }

    focusOnMarker()
  }, [location])

  const focusOnMarker = () => {
    map.current?.setCenter(new window.naver.maps.LatLng(location.lat, location.lng))
  }

  return (
    <div ref={mapRef} className={className}>
      {children?.(focusOnMarker)}
    </div>
  )
}

export default MapViewer
