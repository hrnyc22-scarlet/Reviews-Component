import React from 'react'

const search = function (props) {
  return (
    <form className="search-container">
      <img src="./Search Icon.png" className="search-icon"></img>
      <input type="text" name="name" className="input"/>
    </form>
  )
}

export default search;