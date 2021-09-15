// Special thanks to https://github.com/colbyfayock/next-leaflet-starter/blob/main/src/components/Map/Map.js
import { useEffect } from "react"
import L from "leaflet"
import * as ReactLeaflet from "react-leaflet"
import "leaflet/dist/leaflet.css"

import styles from "./Map.module.css"

import MapDetail from "../MapDetail"
const { MapContainer } = ReactLeaflet

const Map = ({ children, className, ...rest }) => {
  let mapClassName = styles.map

  if (className) {
    mapClassName = `${mapClassName} ${className}`
  }

  useEffect(() => {
    // NOTE: We need to disable the next line because we are going to be defining images for our markers
    // @ts-ignore
    delete L.Icon.Default.prototype._getIconUrl

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    })
  }, [])

  return (
    <MapContainer className={mapClassName} {...rest}>
      {children(ReactLeaflet)}
      <MapDetail />
    </MapContainer>
  )
}

export default Map
