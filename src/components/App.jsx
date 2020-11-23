import React from 'react'

import { fetchUserIP, fetchIPGeoData } from '../api/ip-geolocation'

import Header from './Header'
import Map from './Map'

import appStyles from '../styles/App.module.sass'

class App extends React.Component {
  state = {
    info: {
      ip: '---',
      location: '---',
      timezone: '---',
      isp: '---'
    },
    coordinates: {
      lat: 51.509865,
      lng: -0.118092
    }
  }

  async componentDidMount() {
    const fetchedData = await fetchUserIP()
    if(fetchedData) {
      const userIP = fetchedData.data
      this.handleSearch(userIP)
    }
  }

  handleSearch = async (address) => {
    const fetchedData = await fetchIPGeoData(address)
    this.setState(fetchedData)
  }

  render() {
    const { info, coordinates } = this.state

    return (
      <div className={appStyles.container}>
        <Header handleSearch={this.handleSearch} info={info}/>
        <Map coordinates={coordinates}/>
      </div>
    )
  }
}

export default App