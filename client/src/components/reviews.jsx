import React from "react"
// import Rating from "./ratings.jsx"
import Rating from 'react-rating';


var reviews = function (props) {
  const {Username, Date, Date_of_Stay, Trip_Type, Room_Tip, Trip_Rating, Service_Rating, Sleep_Rating, Location_Rating, Value_Rating, Header, Body, User_Contributions, Helpful_Votes} = props.reviews[0];
  return (
    <div>
      <h4>{Username} wrote a review on {Date}</h4>
      <h4>User Contributions{User_Contributions}</h4> <h4>Helpful Votes{Helpful_Votes}</h4>
      <Rating readonly="true" initialRating={Trip_Rating}/>
      <h2>{Header}</h2>
      <p>{Body}</p>
      <h4>Date of Stay {Date_of_Stay}</h4>
      <h4>Trip Type {Trip_Type}</h4>
      <h4>Room Tip {Room_Tip}</h4>
      <div>
        <span>Service Rating <Rating readonly="true" initialRating={Service_Rating}/></span>
        <span>Sleep Rating <Rating readonly="true" initialRating={Sleep_Rating}/></span>
      </div>
      <div>
        <span>Location Rating <Rating readonly="true" initialRating={Location_Rating}/></span>
        <span>Value Rating <Rating readonly="true" initialRating={Value_Rating}/></span>
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