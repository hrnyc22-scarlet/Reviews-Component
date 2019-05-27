import React from 'react'

const Graph = function (props) {
  const fillWidth = {
    width: props.fillWidth + "%"
  }
  return (
    <div className="graph">
      <div className="graph-fill" style={fillWidth}></div>
    </div>
  )
}

export default Graph