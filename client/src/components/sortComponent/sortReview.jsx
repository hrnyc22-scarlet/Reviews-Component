import React from 'react';
import TravelerRating from './sortOptions/travelerRating.jsx'
import TimeOfYear from './sortOptions/timeOfYear.jsx'
import TravelerType from './sortOptions/travelerType.jsx'
import Language from './sortOptions/language.jsx'

const sortReview = function (props) {
  return (
    <div className="sort-review-container">
      <div className="flex-1">
        <TravelerRating updateFilter={props.updateFilter} ratingCount={props.ratingCount}/>
      </div>
      <div className="flex-2">
        <TimeOfYear updateFilter={props.updateFilter}/>
      </div>
      <div className="flex-3">
        <TravelerType updateFilter={props.updateFilter}/>
      </div>
      <div className="flex-4">
        <Language updateFilter={props.updateFilter} languageCount={props.languageCount}/> 
      </div>
    </div>
  )
}

export default sortReview