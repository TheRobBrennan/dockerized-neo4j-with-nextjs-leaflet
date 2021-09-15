import { useMap } from "react-leaflet"

const MapDetail = () => {
  const map = useMap()
  console.log(`map center:`, map.getCenter())

  return null
}

export default MapDetail
