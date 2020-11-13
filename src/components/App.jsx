import React from 'react'

import { fetchIPGeoData } from '../api/ip-geolocation'

import Header from './Header'
import Info from './Info'
import Map from './Map'

import appStyles from '../styles/App.module.sass'

class App extends React.Component {
  state = {
    info: {
      ip: '8.8.8.8',
      location: 'Vilnius, Lietuva, 123456',
      timezone: '02:00',
      isp: 'Amazon'
    },
    coordinates: {
      lat: 54.6872,
      lng: 25.2797
    }
  }

  handleSearch = async (address) => {
    const fetchedData = await fetchIPGeoData(address)
    this.setState(fetchedData)
  }

  render() {
    const { info, coordinates } = this.state

    return (
      <div>
        <Header handleSearch={this.handleSearch}/>
        <Info info={info}/>
        <Map coordinates={coordinates}/>
      </div>
    )
  }
}

export default App