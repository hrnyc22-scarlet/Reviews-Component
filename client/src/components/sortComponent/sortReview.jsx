import React from 'react';
import TravelerRating from './sortOptions/travelerRating.jsx'
import TimeOfYear from './sortOptions/timeOfYear.jsx'
import TravelerType from './sortOptions/travelerType.jsx'
import Language from './sortOptions/language.jsx'

const sortReview = function (props) {
  return (
    <div className="sort-review-container">
      <div className="flex-1">
        <TravelerRating fillWidth={props.fillWidth}/>
      </div>
      <div className="flex-2">
        <TimeOfYear/>
      </div>
      <div className="flex-3">
        <TravelerType/>
      </div>
      <div className="flex-4">
        <Language languageNumber={{All:"Latin"}}/>
      </div>
    </div>
  )
}

export default sortReview