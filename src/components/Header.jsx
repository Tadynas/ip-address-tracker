import React from 'react'

import SearchBar from './SearchBar'

import headerStyles from '../styles/Header.module.sass'

const Header = ({ handleSearch }) => {
  return (
    <header>
      <h1>IP Address Tracker</h1>
      <SearchBar handleSearch={handleSearch}/>
    </header>
  )
}

export default Header