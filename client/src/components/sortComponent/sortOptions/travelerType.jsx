import React from 'react';
import Checkbox from './checkbox.jsx'

const TravelerType = function (props) {
  return (
    <div className="traveler-type">
      <div className="score-title">Traveler type</div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[null,null,["Families"],null]} clear={[null,null,[],null]}/>
        <span className="graph-name">Families</span>
      </div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[null,null,["Couple"],null]} clear={[null,null,[],null]}/>
        <span className="graph-name">Couples</span>
      </div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[null,null,["Solo"],null]} clear={[null,null,[],null]}/>
        <span className="graph-name">Solo</span>
      </div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[null,null,["Business"],null]} clear={[null,null,[],null]}/>
        <span className="graph-name">Business</span>
      </div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[null,null,["Friends"],null]} clear={[null,null,[],null]}/>
        <span className="graph-name">Friends</span>
      </div>
    </div>
  )
}

export default TravelerType