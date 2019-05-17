import React from "react"
import Rating from 'react-rating';

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
    return (
      <div>
        {Body.length > 50 && this.state.readMore ? Body.slice(0,200) : Body}
        <div onClick={this.changeRead} className="read-more on-click">{this.state.readMore ? 'Read More ^' : 'Read Less v'}</div>
        <div><b id="black">Date of Stay: </b>{Date_of_Stay}</div>
          {!this.state.readMore ? (
            <div>
              <div><b id="black">Trip Type: </b>{Trip_Type}</div>
              <div className="rating">
                <span>Service Rating <Rating readonly="true" initialRating={Service_Rating}/></span>
                <span>Sleep Rating <Rating readonly="true" initialRating={Sleep_Rating}/></span>
              </div>
              <div className="rating">
                <span>Location Rating <Rating readonly="true" initialRating={Location_Rating}/></span>
                <span>Value Rating <Rating readonly="true" initialRating={Value_Rating}/></span>
              </div>
              <div className="disclaimer">This review is the subjective opinion of a TripAdvisor member and not of TripAdvisor LLC.</div>
            </div>

            ) : <div></div>}
      </div>
    )
  }
}

export default Body