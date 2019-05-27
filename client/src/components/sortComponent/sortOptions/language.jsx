import React from 'react';
import Checkbox from './checkbox.jsx'

const Language = function (props) {
  return (
    <div className="language">
      <div className="score-title">Language</div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">All languages ({props.languageNumber.All})</span>
      </div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">All languages ({props.languageNumber.All})</span>
      </div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">All languages ({props.languageNumber.All})</span>
      </div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">All languages ({props.languageNumber.All})</span>
      </div>
      <div className="score">
        <Checkbox/>
        <span className="graph-name">All languages ({props.languageNumber.All})</span>
      </div>
    </div>
  )
}

export default Language