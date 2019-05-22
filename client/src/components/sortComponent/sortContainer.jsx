import React from 'react'
import WriteReview from './writeReview.jsx'

class Sort extends React.Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }

  render () {
    return (
      <div className="sort-container">
        <div className="tag-container">
          <span className="tag-clicked">Reviews</span>
          <span className="tag">Q+A</span>
          <span className="tag">Room tips</span>
        </div>
        <WriteReview/>
        {/* <SortReview/>
        <PopularMentions/> */}
      </div>
    )
  }
}

export default Sort;