import React, { useState } from 'react'

import searchBarStyles from '../styles/SearchBar.module.sass'

const SearchBar = (props) => {
  const [ error, setError ] = useState(false)
  const handleSearch = (e) => {
    e.preventDefault()
    const address = e.target.elements.address.value
    
    if(!!address.match(/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/)) {
      setError(false)
      props.handleSearch(address)
    } else {
      setError(true)
    }
  }

  return (
    <form onSubmit={handleSearch}>
      {error && <p>Enter valid IP address or domain!</p>}
      <div className={searchBarStyles.formInput}>
        <input 
          type="text"
          placeholder="Search for any IP address or domain"
          autoFocus
          name="address"
        />
        <button></button>
      </div>
    </form>
  )
}

export default SearchBar