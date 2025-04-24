export const toRadians = (degree: number) => (degree * Math.PI) / 180

// Haversine 공식(두 좌표 간 거리 계산)
export const getDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
  const earthRadius = 6_371_000 // 지구 반경(m)
  const latDiff = toRadians(lat2 - lat1)
  const lngDiff = toRadians(lng2 - lng1)
  const a =
    Math.sin(latDiff / 2) ** 2 +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(lngDiff / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return earthRadius * c
}
