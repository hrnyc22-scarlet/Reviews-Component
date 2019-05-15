import React from "react"

var reviews = function (props) {
  return (
    <div>
      {props.reviews.map(function(review){
        return (
          <div>{JSON.stringify(review.Username)}</div>
        )
      })}
    </div>
  )
}

export default reviews