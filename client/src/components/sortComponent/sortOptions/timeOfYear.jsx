import React from 'react';
import Checkbox from './checkbox.jsx'

const TimeOfYear = function (props) {
  return (
    <div className="time-of-year">
      <div className="score-title">Time of year</div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">Mar-May</span>
      </div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">Jun-Aug</span>
      </div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">Sep-Nov</span>
      </div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">Dec-Feb</span>
      </div>
    </div>
  )
}

export default TimeOfYear