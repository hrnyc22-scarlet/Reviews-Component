import React from 'react';

const writeReview = function (props) {
  return (
    <div className="write-review-container">
      <span className="reviews-title">Reviews</span>
      <div className="write-review-button-container">
        <span className="write-review">Write a review</span>
        <span className="write-review-image-container">
          <img className="write-review-dropdown"src="./DropDownArrowWhite.png"></img>
        </span>
      </div>
    </div>
  )
}

export default writeReview