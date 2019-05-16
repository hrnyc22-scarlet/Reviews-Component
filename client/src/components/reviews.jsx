import React from "react"
// import Rating from "./ratings.jsx"
import Rating from 'react-rating';


var reviews = function (props) {
  const {Username, Date, Date_of_Stay, Trip_Type, Room_Tip, Trip_Rating, Service_Rating, Sleep_Rating, Location_Rating, Value_Rating, Header, Body, User_Contributions, Helpful_Votes} = props.reviews[2]; //need to add location, image
  return (
    <div className="review">
      <div className="review-header">
        <div className="review-header-content">
          <div className="image-cropper">
            <img className="header-image" src="https://www.gstatic.com/webp/gallery/1.sm.jpg" ></img>
          </div>
          <div className="header-text">
            <div className="user">
              <span><b id="black">{Username}</b> wrote a review on {Date}</span>
            </div>
            <div className="location">
              <span>location </span><span><b>{User_Contributions}</b> contributions </span><span><b>{Helpful_Votes}</b> helpful votes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="review-body">
        <div className="review-body-content">
          <div className="rating">
            <Rating readonly="true" initialRating={Trip_Rating}/> 
          </div>
          <h2 id="black">{Header}</h2>
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