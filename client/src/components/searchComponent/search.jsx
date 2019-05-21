import React from 'react'

const search = function (props) {
  return (
    <form className="search-container">
      <img src="./Search Icon.png" className="search-icon"></img>
      <input value="Search reviews" type="text" name="name" className="input"/>
      <img src="./Cancel Search Icon.png" className="cancel-search-icon"></img>
    </form>
  )
}

export default search;