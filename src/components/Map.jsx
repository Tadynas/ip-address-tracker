import React from 'react'

import { MapContainer, Marker, TileLayer, MapConsumer, ZoomControl } from "react-leaflet";

import markerIcon from '../utils/markerIcon'

import 'leaflet/dist/leaflet.css';
import mapStyles from '../styles/Map.module.sass'

const Map = ({ coordinates: { lat, lng } }) => {  
  const position = [lat, lng]

  return (
    <MapContainer className={mapStyles.map} center={position} scrollWheelZoom={true} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
      />
      <MapConsumer>
        {(map) => {
          map.setView([lat, lng], 15)
          return null  
        }}
      </MapConsumer>
      <Marker position={position} icon={markerIcon}>
      </Marker>
      <ZoomControl position="bottomright" />
    </MapContainer>
  )
}

export default Map