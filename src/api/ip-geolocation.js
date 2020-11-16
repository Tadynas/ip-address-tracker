import axios from 'axios'

const geoIPurl = 'https://geo.ipify.org/api/v1'
const ipURL = 'https://api.ipify.org'
const key = process.env.REACT_APP_IPIFY_KEY

export const fetchIPGeoData = async (address) => {
  try {
    let modifiedData;

    if(process.env.NODE_ENV === 'development') {
      modifiedData = {
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
    } else {
      const { data: { ip, isp, location } }  = await axios.get(`${geoIPurl}?apiKey=${key}&ipAddress=${address}`)

      modifiedData = {
        info: {
          ip: ip,
          location: `${location.city}, ${location.country}, ${location.postalCode}`,
          timezone: location.timezone,
          isp: isp
        },
        coordinates: {
          lat: location.lat,
          lng: location.lng
        }
      }
    }

    return modifiedData
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