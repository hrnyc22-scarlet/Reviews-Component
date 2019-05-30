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
    this.setState({ 
      checked: event.target.checked 
    },
    ()=>{
      if (this.state.checked) {
        this.props.updateFilter(...this.props.selection)
      } else {
        this.props.updateFilter(...this.props.clear)
      }
    })
  }

  render() {
    return (
      <span>
        <label className={"checkbox " + this.props.classValue}>
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