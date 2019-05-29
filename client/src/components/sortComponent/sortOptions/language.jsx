import React from 'react';
import Checkbox from './checkbox.jsx'

const Language = function (props) {
  return (
    <div className="language">
      <div className="score-title">Language</div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[null,null,null,["All"]]} clear={[null,null,null,[]]}/>
        <span className="graph-name">All languages ({props.languageCount.All})</span>
      </div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[null,null,null,["English"]]} clear={[null,null,null,[]]}/>
        <span className="graph-name">English ({props.languageCount.English})</span>
      </div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[null,null,null,["German"]]} clear={[null,null,null,[]]}/>
        <span className="graph-name">German ({props.languageCount.German})</span>
      </div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[null,null,null,["Spanish"]]} clear={[null,null,null,[]]}/>
        <span className="graph-name">Spanish ({props.languageCount.Spanish})</span>
      </div>
      <div className="score">
        <Checkbox updateFilter={props.updateFilter} selection={[null,null,null,["Latin"]]} clear={[null,null,null,[]]}/>
        <span className="graph-name">Latin ({props.languageCount.Latin})</span>
      </div>
    </div>
  )
}

export default Language