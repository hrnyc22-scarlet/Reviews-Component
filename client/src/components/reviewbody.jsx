import React from "react"

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }

  render () {
    const {Date_of_Stay, Trip_Type, Room_Tip, Service_Rating, Sleep_Rating, Location_Rating, Value_Rating} = this.props.reviewBody;
    return (
      <div>
        {console.log('getting inside the new comp')}
        <p>{Body}</p>
        <div><b id="black">Date of Stay: </b>{Date_of_Stay}</div>
        <div><b id="black">Trip Type: </b>{Trip_Type}</div>
        <div><b id="black">Room Tip: </b>{Room_Tip}</div>
        <div className="rating">
          <span>Service Rating <Rating readonly="true" initialRating={Service_Rating}/></span>
          <span>Sleep Rating <Rating readonly="true" initialRating={Sleep_Rating}/></span>
        </div>
        <div className="rating">
          <span>Location Rating <Rating readonly="true" initialRating={Location_Rating}/></span>
          <span>Value Rating <Rating readonly="true" initialRating={Value_Rating}/></span>
        </div>
      </div>
    )
  }
}

export default App