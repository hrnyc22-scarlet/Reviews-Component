
import React from "react"
import { EmailShareButton } from 'react-share';


class Share extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      copySuccess: false,
      helpful: 0,
      likes: 0,
      popUp: false
    }
    this.copyToClipBoard = this.copyToClipBoard.bind(this)
    this.changePopUp = this.changePopUp.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  copyToClipBoard () {
    this.textArea.select();
    document.execCommand('copy');
  }

  changePopUp () {
    this.setState({
      popUp:true
    })
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick (e) {
    if (!this.node.contains(e.target)){
      this.setState({
        popUp:false
      })    
    }
  }

  render () {
    return (
      <span ref={node => this.node = node}>
        <form className={"hidden-link"}>
          <textarea
            ref={(textarea) => this.textArea = textarea}
            value='props.url'//change this to props.url 
          />
        </form>
        <span id="black" className="react-button share on-click" onClick={this.changePopUp}>Share</span>
        {this.state.popUp ? (
          <div className="popup-container">   
            <img className="popup-arrow" src="./icons/UpArrowWhite.png"></img> 
            <div className="share-container">
              <EmailShareButton url={"www.google.co.il"}>
                <img className="share-icon" src="./icons/Email.png"></img>
                <span className="share-text">Email</span>
              </EmailShareButton>
            </div>
            <div onClick={this.copyToClipBoard} className="share-container">
              <img className="share-icon" src="./icons/Copy.png"></img>
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
