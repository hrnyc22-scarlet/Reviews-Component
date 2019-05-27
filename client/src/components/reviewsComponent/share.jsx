
import React from "react"
import { EmailShareButton } from 'react-share';


class Share extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      copySuccess: false,
      helpful: 0,
      likes: 0
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
        <span id="black" className="share on-click" onClick={this.props.popUp}>Share</span>
        {this.props.popUpStatus ? (
          <div className="popup-container">   
            <img className="popup-arrow" src="./UpArrowWhite.png"></img> 
            <div className="share-container">
              <EmailShareButton url={"www.google.co.il"}>
                <img className="share-icon" src="./Email.png"></img>
                <span className="share-text">Email</span>
              </EmailShareButton>
            </div>
            <div onClick={this.copyToClipBoard} className="share-container">
              <img className="share-icon" src="./Copy.png"></img>
              <span className="share-text">Copy Link</span>
            </div>
          </div> 
          ) : <div></div>
        }
      </span>

    )
  }
}

  
export default Share
