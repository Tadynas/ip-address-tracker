// import axios from 'axios'

// const url = 'https://geo.ipify.org/api/v1'
// const key = 'at_w1O8ZemDRkPa7LTNVv6OsBzGjQJwA'

export const fetchIPGeoData = async (address) => {
  try {
    // const { data: { ip, isp, location } }  = await axios.get(`${url}?apiKey=${key}&ipAddress=${address}`)
    
    const tempData = {
      info: {
        ip: '8.8.8.8',
        location: 'Kalvariju g., Lithuania, 894684',
        timezone: '+02:00',
        isp: 'google.com'
      },
      coordinates: {
        lat: 54.687157,
        lng: 25.279652
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
