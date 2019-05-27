import React from 'react';
import Checkbox from './checkbox.jsx'

const TravelerType = function (props) {
  return (
    <div className="traveler-type">
      <div className="score-title">Traveler type</div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">Families</span>
      </div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">Couples</span>
      </div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">Solo</span>
      </div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">Business</span>
      </div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">Friends</span>
      </div>
    </div>
  )
}

export default TravelerType