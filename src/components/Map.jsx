import React from 'react'

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import mapStyles from '../styles/Map.module.sass'

const Map = ({ coordinates: { lat, lng } }) => {
  return (
    <MapContainer className={mapStyles.container} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map