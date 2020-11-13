import Leaflet from 'leaflet'

import iconLocation from '../images/icon-location.svg'

const markerIcon = Leaflet.icon({
    iconUrl: iconLocation,
  
    iconSize: [38, 48],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
})

export default markerIcon