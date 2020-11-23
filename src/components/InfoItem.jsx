import React from 'react'

import infoStyles from '../styles/Info.module.sass'

const InfoItem = ({ name, value}) => {
  return (
    <div>
      <span className={infoStyles.name} >{name}</span>  
      <h2>{value}</h2>  
    </div>  
  )
}

export default InfoItem