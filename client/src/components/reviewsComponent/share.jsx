
import React from "react"
import { EmailShareButton } from 'react-share';


class Share extends React.Component {
  constructor (props) {
    super(props)
    // this.node = React.createRef();
    // this.textInput = React.createRef();
    this.state = {
      copySuccess: false,
      helpful: 0,
      likes: 0,
      popUp: false
    }
    this.copyToClipBoard = this.copyToClipBoard.bind(this)
    // this.email = this.email.bind(this)
    this.changePopUp = this.changePopUp.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  copyToClipBoard () {
    console.log('hit the copy')
    this.textArea.select();
    document.execCommand('copy');
  }

  // copyToClipBoard (e) {
  //   console.log('hits the copy')
  // }

  // email (e) {
  //   console.log('hits the email')
  // }

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
            value='www.google.com/rickroll'
          />
        </form>
        <span id="black" className="share on-click" onClick={this.changePopUp}>Share</span>
        {this.state.popUp ? (
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
