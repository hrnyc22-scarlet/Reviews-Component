import React from 'react';
import TravelerRating from './sortOptions/travelerRating.jsx'
import TimeOfYear from './sortOptions/timeOfYear.jsx'
import TravelerType from './sortOptions/travelerType.jsx'
import Language from './sortOptions/language.jsx'

const sortReview = function (props) {
  return (
    <div className="sort-review-container">
      <div className="flex-1">
        <TravelerRating updateFilter={props.updateFilter} fillWidth={props.fillWidth}/>
      </div>
      <div className="flex-2">
        <TimeOfYear updateFilter={props.updateFilter}/>
      </div>
      <div className="flex-3">
        <TravelerType updateFilter={props.updateFilter}/>
      </div>
      <div className="flex-4">
        <Language updateFilter={props.updateFilter} languageNumber={{"All":22,"English":22,"German":0,"Spanish":0,"Latin":0}}/>
      </div>
    </div>
  )
}

export default sortReview