import React from 'react'

import SearchBar from './SearchBar'
import Info from './Info'

import headerStyles from '../styles/Header.module.sass'

const Header = ({ handleSearch, info }) => {
  return (
    <header className={headerStyles.header}>
      <div>
        <div className={headerStyles.headerForm}>
          <h1>IP Address Tracker</h1>
          <SearchBar handleSearch={handleSearch}/>
        </div>
        <Info info={info}/>
      </div>
    </header>
  )
}

export default Header