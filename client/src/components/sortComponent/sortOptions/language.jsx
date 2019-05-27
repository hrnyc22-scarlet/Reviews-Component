import React from 'react';
import Checkbox from './checkbox.jsx'

const Language = function (props) {
  return (
    <div className="language">
      <div className="score-title">Language</div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[null,null,null,["All"]]}/>
        <span className="graph-name">All languages ({props.languageNumber.All})</span>
      </div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[null,null,null,["English"]]}/>
        <span className="graph-name">English ({props.languageNumber.English})</span>
      </div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[null,null,null,["German"]]}/>
        <span className="graph-name">German ({props.languageNumber.German})</span>
      </div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[null,null,null,["Spanish"]]}/>
        <span className="graph-name">Spanish ({props.languageNumber.Spanish})</span>
      </div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[null,null,null,["Latin"]]}/>
        <span className="graph-name">Latin ({props.languageNumber.Latin})</span>
      </div>
    </div>
  )
}

export default Language