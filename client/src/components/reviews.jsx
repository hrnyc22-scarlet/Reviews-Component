import React from "react"
// import Rating from "./ratings.jsx"
import Rating from 'react-rating';


var reviews = function (props) {
  const {Username, Date, Date_of_Stay, Trip_Type, Room_Tip, Trip_Rating, Service_Rating, Sleep_Rating, Location_Rating, Value_Rating, Header, Body, User_Contributions, Helpful_Votes} = props.reviews[0]; //need to add location, image
  return (
    <div className="review">
      <div className="review-header">
        <div className="image-cropper">
          <img className="header-image" src="https://www.gstatic.com/webp/gallery/1.sm.jpg" ></img>
        </div>
        <div className="header-text">
          <div className="content">
            <div className="user">
              <span><b>{Username}</b> wrote a review on {Date}</span>
            </div>
            <div className="location">
              <span >location </span><span >{User_Contributions} contributions </span><span >{Helpful_Votes} helpful votes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="review-body">
        <div className="rating">
          <Rating readonly="true" initialRating={Trip_Rating}/> 
        </div>
        <h2>{Header}</h2>
        <p>{Body}</p>
        <h4>Date of Stay: {Date_of_Stay}</h4>
        <h4>Trip Type: {Trip_Type}</h4>
        <h4>Room Tip: {Room_Tip}</h4>
        <div className="rating">
          <span>Service Rating <Rating readonly="true" initialRating={Service_Rating}/></span>
          <span>Sleep Rating <Rating readonly="true" initialRating={Sleep_Rating}/></span>
        </div>
        <div className="rating">
          <span>Location Rating <Rating readonly="true" initialRating={Location_Rating}/></span>
          <span>Value Rating <Rating readonly="true" initialRating={Value_Rating}/></span>
        </div>
      </div>
    <button>Helpful</button><button>Repost</button><button>Share</button>
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