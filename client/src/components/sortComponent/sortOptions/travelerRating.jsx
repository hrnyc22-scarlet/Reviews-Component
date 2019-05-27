import React from 'react';
import Checkbox from './checkbox.jsx'
import Graph from './graph.jsx'

const TravelerRating = function (props) {
  return (
    <div className="traveler-rating">
      <div className="score-title">Traveler Rating</div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">Excellent</span>
        <span className="graph-number">{props.fillWidth}</span>
        <Graph fillWidth={props.fillWidth}/>
      </div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">Good</span>
        <span className="graph-number">{props.fillWidth}</span>
        <Graph fillWidth={props.fillWidth}/>
      </div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">Average</span>
        <span className="graph-number">{props.fillWidth}</span>
        <Graph fillWidth={props.fillWidth}/>
      </div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">Poor</span>
        <span className="graph-number">{props.fillWidth}</span>
        <Graph fillWidth={props.fillWidth}/>
      </div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">Terrible</span>
        <span className="graph-number">{props.fillWidth}</span>
        <Graph fillWidth={props.fillWidth}/>
      </div>
    </div>
  )
}

export default TravelerRating