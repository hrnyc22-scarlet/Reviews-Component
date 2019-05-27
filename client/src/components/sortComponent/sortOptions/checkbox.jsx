import React from 'react'

class Checkbox extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      checked: false
    }
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  handleCheckboxChange () {
    this.setState({ checked: event.target.checked })
    this.props.updateFilter(...this.props.selection)
  }

  render() {
    return (
      <span>
        <label className="checkbox">
          <input type="checkbox"
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
        </label>
      </span>    
    ) 
  }
}

export default Checkbox