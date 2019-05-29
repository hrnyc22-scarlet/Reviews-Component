import React from "react"
import Rating from './rating.jsx';
import ReviewHeader from './reviewheader.jsx'
import ReviewBody from './reviewbody.jsx'
import Share from './share.jsx'
import Highlight from 'react-highlighter';

var reviews = function (props) {
  const {Username, Date, Date_of_Stay, 
    Trip_Type, Room_Tip, Trip_Rating, 
    Service_Rating, Sleep_Rating, Location_Rating, 
    Value_Rating, Header, Body, User_Contributions, 
    Helpful_Votes,Image_Location,Location} = props.reviewData; //need to add location, image, language
  return (
    <div className="review">
      <ReviewHeader reviewHeader={{Username,Date,User_Contributions, Helpful_Votes,Image_Location,Location}}/>
      <div className="review-body">
        <div className="review-body-content">
          <div className="rating-container" >
            <Rating rating={Trip_Rating}/>
          </div>
          <Highlight 
            id="black searchable" 
            className="on-click body-header" 
            search={props.searchTerm}
          >{Header}</Highlight>
          <ReviewBody 
            reviewBody={{Body,Date_of_Stay, Trip_Type, Room_Tip, Service_Rating, Sleep_Rating, Location_Rating, Value_Rating}} 
            searchTerm={props.searchTerm}
          />
        </div>
      </div>
      <span id="black" className="react-button on-click">Helpful</span><span id="black" className="react-button on-click">Repost</span><Share/>
    </div>
  )
}

export default reviews

