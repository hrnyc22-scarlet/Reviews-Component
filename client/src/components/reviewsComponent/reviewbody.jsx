import React from "react"
import Rating from './rating.jsx';
import Highlight from 'react-highlighter';

class Body extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      readMore: true,
    }

    this.changeRead = this.changeRead.bind(this)
  }

  changeRead () {
    this.setState((state,props)=>{
      return {
      readMore: !state.readMore
      }
    })
  }

  render () {
    const {Body,Date_of_Stay, Trip_Type, Room_Tip, Service_Rating, Sleep_Rating, Location_Rating, Value_Rating} = this.props.reviewBody;
    let dynamicBody = Body.length > 50 && this.state.readMore ? Body.slice(0,200) : Body
    return (
      <div>
        <Highlight search={this.props.searchTerm}>
        {dynamicBody}
        </Highlight>
        <div className="read-more-container">
          <span onClick={this.changeRead} className="on-click">{this.state.readMore ? 'Read More' : 'Read Less'}</span>
          <span className="read-more-carrot-container">
            <span className={this.state.readMore ? 'read read-more on-click' : 'read read-less on-click'} ></span>
          </span>
        </div>
        <div><b id="black">Date of Stay: </b>{Date_of_Stay}</div>
          {!this.state.readMore ? (
            <div>
              <div><b id="black">Trip Type: </b>{Trip_Type}</div>
              <div className="rating">
                <span><Rating  rating={Service_Rating}/> Service Rating </span>
              </div>
              <div className="rating">
                <span><Rating  rating={Sleep_Rating}/> Sleep Rating</span>
              </div>
              <div className="rating">
                <span><Rating  rating={Location_Rating}/> Location Rating </span>
              </div>
              <div className="rating">
                <span><Rating  rating={Value_Rating}/> Value Rating </span>
              </div>
              <div className="disclaimer">This review is the subjective opinion of a TripAdvisor member and not of TripAdvisor LLC.</div>
            </div>
            ) : <div></div>}
      </div>
    )
  }
}

export default Body