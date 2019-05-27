import React from 'react'
import WriteReview from './writeReview.jsx'
import SortReview from './sortReview.jsx'

class Sort extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      reviews: true,
      qa: false,
      roomTips: false,
      fillWidth: 20,
    }

    this.handleTagClick = this.handleTagClick.bind(this)

  }

  handleTagClick (e) {
    this.setState({
      reviews: false,
      qa: false,
      roomTips: false,
    })
    this.setState({
      [e.target.id]: true
    })
  }

  render () {
    return (
      <div className="sort-container">
        <div className="tag-container">
          <span className={this.state.reviews ? "tag-clicked" : "tag"} id="reviews" onClick={this.handleTagClick}>Reviews</span>
          <span className={this.state.qa ? "tag-clicked" : "tag"} id="qa" onClick={this.handleTagClick}>Q+A</span>
          <span className={this.state.roomTips ? "tag-clicked" : "tag"} id="roomTips" onClick={this.handleTagClick}>Room tips</span>
        </div>
        {this.state.reviews && <div>
          <WriteReview/>
          <SortReview fillWidth={this.state.fillWidth} updateFilter={this.props.updateFilter}/>
        </div>}
        {this.state.qa && <div className="placeholder">QA TIME BROS</div>}
        {this.state.roomTips && <div className="placeholder">ROOM TIPS TIME BROS</div>}
      </div>
    )
  }
}

export default Sort;