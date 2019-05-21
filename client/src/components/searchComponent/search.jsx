import React from 'react'
// import Hilitor from './hilitor.jsx'

class Search extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      input: "Search reviews",
      // myHilitor: new Hilitor ("searchable")
    }
    this.handleChange = this.handleChange.bind(this)
    this.onEnterPress = this.onEnterPress.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleChange (e) {
    this.setState({
      input: e.target.value
    })
  }

  handleClear () {
    this.setState ({
      input: ""
    })
    // this.state.myHilitor.remove()
  }

  onEnterPress (e) {
    if(e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      this.props.search(this.state.input);
      this.handleClear
    }
    // this.state.myHilitor.apply("highlight words");
  }

  render () {
    return (
    <form className="search-container">
      <img src="./Search Icon.png" className="search-icon"></img>
      <input 
      onChange={this.handleChange} 
      onClick={this.state.input === "Search reviews" ? this.handleClear : ""} 
      onKeyDown={this.onEnterPress}
      value={this.state.input} 
      type="text" 
      name="name" 
      className="input"
      />
      <img onClick={this.handleClear} src="./Cancel Search Icon.png" className="cancel-search-icon on-click"></img>
    </form>
    )}
}

export default Search;