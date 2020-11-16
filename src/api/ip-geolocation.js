import axios from 'axios'

// const geoIPurl = 'https://geo.ipify.org/api/v1'
const ipURL = 'https://api.ipify.org'

// const key = 'at_w1O8ZemDRkPa7LTNVv6OsBzGjQJwA'

export const fetchIPGeoData = async (address) => {
  try {
    // const { data: { ip, isp, location } }  = await axios.get(`${geoIPurl}?apiKey=${key}&ipAddress=${address}`)
    
    const tempData = {
      info: {
        ip: '8.8.8.8',
        location: 'Kalvariju g., Lithuania, 894684',
        timezone: '+02:00',
        isp: 'google.com'
      },
      coordinates: {
        lat: 51.5074,
        lng: 0.1278
      }
    }

    // const modifiedData = {
    //   info: {
    //     ip: ip,
    //     location: `${location.city}, ${location.country}, ${location.postalCode}`,
    //     timezone: location.timezone,
    //     isp: isp
    //   },
    //   coordinates: {
    //     lat: location.lat,
    //     lng: location.lng
    //   }
    // }

    return tempData
  } catch (error) {
    console.log(error)
  }
}

export const fetchUserIP = async () => {
  try {
     const response  = await axios.get(ipURL)
     return response
  } catch (error) {
    console.log(error);
  }
}