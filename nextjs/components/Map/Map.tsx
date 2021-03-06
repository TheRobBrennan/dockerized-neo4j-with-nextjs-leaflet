// Special thanks to https://github.com/colbyfayock/next-leaflet-starter/blob/main/src/components/Map/Map.js
import { useEffect } from "react"
import L from "leaflet"
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet"
import "leaflet/dist/leaflet.css"

import styles from "./Map.module.css"

import CurrentLocation from "../CurrentLocation"

const Map = ({ center, className, positions, ...rest }) => {
  let mapClassName = styles.map

  if (className) {
    mapClassName = `${mapClassName} ${className}`
  }

  useEffect(() => {
    // NOTE: We need to disable the next line because we are going to be defining images for our markers. Otherwise, our build will fail.
    // @ts-ignore
    delete L.Icon.Default.prototype._getIconUrl

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    })
  }, [])

  return (
    <MapContainer
      className={mapClassName}
      center={center}
      positions={positions}
      {...rest}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <CurrentLocation />
      <Polyline pathOptions={{ color: "purple" }} positions={positions} />
    </MapContainer>
  )
}

export default Map
