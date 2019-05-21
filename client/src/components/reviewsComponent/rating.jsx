import React from 'react'

const Rating = function (props) {
  return (
    <span className="rating-countainer">
      <span className={props.rating > 0 ? (props.rating > 0.5 ?  "rating-circle-full" : "rating-circle-half" ): "rating-circle-empty"}></span>
      <span className={props.rating > 1 ? (props.rating > 1.5 ?  "rating-circle-full" : "rating-circle-half" ): "rating-circle-empty"}></span>
      <span className={props.rating > 2 ? (props.rating > 2.5 ?  "rating-circle-full" : "rating-circle-half") : "rating-circle-empty"}></span>
      <span className={props.rating > 3 ? (props.rating > 3.5 ?  "rating-circle-full" : "rating-circle-half") : "rating-circle-empty"}></span>
      <span className={props.rating > 4 ? (props.rating > 4.5 ?  "rating-circle-full" : "rating-circle-half") : "rating-circle-empty"}></span>
    </span>
  )
}

export default Rating