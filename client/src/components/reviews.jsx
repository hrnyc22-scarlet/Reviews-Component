import React from "react"
// import Rating from "./ratings.jsx"
import Rating from 'react-rating';
import ReviewHeader from './reviewheader.jsx'
import ReviewBody from './reviewbody.jsx'


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
      <button id="black">Helpful</button><button id="black">Repost</button><button id="black">Share</button>
    </div>
  )
}

export default reviews

// import React from "react"

// var reviews = function (props) {
//   // if (props.reviews !== undefined) {
//     const {Username, Date, Date_of_Stay, Trip_Type, Room_Tip, Trip_Rating, Service_Rating, Sleep_Rating, Location_Rating, Value_Rating, Header, Body, User_Contributions, Helpful_Votes} = props.reviews[0];
//   // }
//   console.log('username in reviews=',Username)
//   return (
//     <div>
//       <h3>{Username}</h3>
//     </div>
//   )
// }

// export default reviews

// // {props.reviews.map(function(review){
// //   return (
// //     <div>{JSON.stringify(review.Username)}</div>
// //   )
// // })}