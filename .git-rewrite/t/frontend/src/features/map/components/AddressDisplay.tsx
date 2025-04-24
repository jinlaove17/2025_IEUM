import { MapPinIcon } from "lucide-react"
import { useEffect, useState } from "react"

interface AddressDisplayProps {
  lastFetchedPosition: { lat: number; lng: number }
}

const AddressDisplay = ({ lastFetchedPosition }: AddressDisplayProps) => {
  const [address, setAddress] = useState("")

  useEffect(() => {
    naver.maps.Service.reverseGeocode(
      {
        coords: new naver.maps.LatLng(lastFetchedPosition),
      },
      (_, response: naver.maps.Service.ReverseGeocodeResponse) => {
        setAddress(response.v2.address.jibunAddress)
      },
    )
  }, [lastFetchedPosition])

  return (
    <div className="absolute top-0 left-0 z-10 flex items-center w-full gap-2 p-3 bg-gradient-to-b from-em-white via-em-white/80 to-em-white/10">
      <MapPinIcon className="stroke-red-500" />
      <p className="font-semibold">{address}</p>
    </div>
  )
}

export default AddressDisplay
