import React from 'react'

import InfoItem from './InfoItem'
// import infoStyles from '../styles/Info.module.sass'

const Info = ({ info: { ip, location, timezone, isp }}) => {
  return (
    <ul>
      <li>
        <InfoItem name="IP Address" value={ip}/>
      </li>
      <li>
        <InfoItem name="Location" value={location}/>
      </li>
      <li>
        <InfoItem name="Timezone" value={timezone}/>
      </li>
      <li>
        <InfoItem name="ISP" value={isp}/>
      </li>
    </ul>
  )
}

export default Info