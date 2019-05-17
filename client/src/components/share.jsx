
import React from "react"
import { EmailShareButton,EmailIcon } from 'react-share';


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
          <div className="popup">    
            <div>
              <EmailShareButton
                url={"www.google.co.il"}
                className="popup-icon">
                <EmailIcon
                  size={32}
                  round />
              </EmailShareButton>
            </div>
            <div onClick={this.copyToClipBoard} className="popup-text on-click">Copy</div>
          </div> 
          ) : <div></div>
        }
      </span>

    )
  }
}

  
export default Share
