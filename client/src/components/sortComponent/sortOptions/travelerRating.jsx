import React from 'react';
import Checkbox from './checkbox.jsx'
import Graph from './graph.jsx'

const TravelerRating = function (props) {
  return (
    <div className="traveler-rating">
      <div className="score-title">Traveler Rating</div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[[4],null,null,null]}/>
        <span className="graph-name">Excellent</span>
        <span className="graph-number">{(props.ratingCount["5"])}</span>
        <Graph fillWidth={(props.ratingCount["5"]/props.ratingCount.total).toFixed(2)*100}/>
      </div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[[3],null,null,null]}/>
        <span className="graph-name">Good</span>
        <span className="graph-number">{(props.ratingCount["4"])}</span>
        <Graph fillWidth={(props.ratingCount["4"]/props.ratingCount.total).toFixed(2)*100}/>
      </div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[[2],null,null,null]}/>
        <span className="graph-name">Average</span>
        <span className="graph-number">{(props.ratingCount["3"])}</span>
        <Graph fillWidth={(props.ratingCount["3"]/props.ratingCount.total).toFixed(2)*100}/>
      </div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[[1],null,null,null]}/>
        <span className="graph-name">Poor</span>
        <span className="graph-number">{(props.ratingCount["2"])}</span>
        <Graph fillWidth={(props.ratingCount["2"]/props.ratingCount.total).toFixed(2)*100}/>
      </div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[[0],null,null,null]}/>
        <span className="graph-name">Terrible</span>
        <span className="graph-number">{(props.ratingCount["1"])}</span>
        <Graph fillWidth={(props.ratingCount["1"]/props.ratingCount.total).toFixed(2)*100}/>
      </div>
    </div>
  )
}

export default TravelerRating