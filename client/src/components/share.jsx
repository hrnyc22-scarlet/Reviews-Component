
import React from "react"


class Share extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      copySuccess: false,
    }
    this.copyToClipBoard = this.copyToClipBoard.bind(this)
    this.email = this.email.bind(this)
  }

  copyToClipBoard (e) {
    console.log('hits the copy')
  }

  email (e) {
    console.log('hits the email')

  }

  render () {
    return (
      <span>
        <span id="black" className="share" onClick={this.props.popUp}>Share</span>
        {this.props.popUpStatus ? (
          <div className="popup">
            <div onClick={this.email} className="popup-text">Email</div>
            <div onClick={this.copyToClipBoard} className="popup-text">Copy</div>
          </div> 
          ) : <div></div>
        }
      </span>

    )
  }
}

  
export default Share
