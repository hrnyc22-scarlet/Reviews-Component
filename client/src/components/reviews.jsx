import React from "react"
import Rating from 'react-rating';
import ReviewHeader from './reviewheader.jsx'
import ReviewBody from './reviewbody.jsx'
import Share from './share.jsx'


var reviews = function (props) {
  const {Username, Date, Date_of_Stay, Trip_Type, Room_Tip, Trip_Rating, Service_Rating, Sleep_Rating, Location_Rating, Value_Rating, Header, Body, User_Contributions, Helpful_Votes} = props.reviews[2]; //need to add location, image
  return (
    <div className="review">
      <ReviewHeader reviewHeader={{Username,Date,User_Contributions, Helpful_Votes}}/>
      <div className="review-body">
        <div className="review-body-content">
          <div className="rating">
            <Rating readonly="true" initialRating={Trip_Rating}/> 
          </div>
          <h2 id="black">{Header}</h2>
          <ReviewBody reviewBody={{Body,Date_of_Stay, Trip_Type, Room_Tip, Service_Rating, Sleep_Rating, Location_Rating, Value_Rating}}/>
        </div>
      </div>
      <span id="black" className="share">Helpful</span><span id="black" className="share">Repost</span><Share popUp={props.popUp} popUpStatus={props.popUpStatus}/>
    </div>
  )
}

export default reviews

