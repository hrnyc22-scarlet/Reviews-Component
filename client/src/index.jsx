import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import ReviewsComponent from "./components/reviewsComponent/reviews.jsx"
import SearchReviewsComponent from "./components/searchComponent/search.jsx"
// import ReviewsSortComponent from "./components/ReviewsSortComponent.jsx"

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      data:[],
      popUp: false
    }
    this.popUp = this.popUp.bind(this)
    this.popDown = this.popDown.bind(this)
    this.getAllData = this.getAllData.bind(this)
  }

  searchReviews () {

  }

  getAllData () {
    axios.get('/reviews')
    .then((results)=>{
      console.log('setting state to results',results)
      this.setState({
        data:results.data
      })
    })
    .catch((err)=>{
      console.log('error getting data',err)
    })
  }

  popUp () {
    this.setState({
      popUp: true
    })
  }

  popDown () {
    this.setState({
      popUp: false
    })
  }

  componentDidMount() {
    this.getAllData()
  }
  //need to fix the state
  render () {
    return (
      <div className="page-component">
        <SearchReviewsComponent search={this.searchReviews}/>
        {this.state.data.slice(0,10).map((reviewData)=>{
          return (
            <div onClick={this.state.popUp ? this.popDown : ''} className="review-container"> 
              {/* <ReviewsSortComponent/> */}
              <ReviewsComponent reviewData={reviewData} popUp={this.popUp} popUpStatus={this.state.popUp}/>  
            </div>
          )
        })}
      </div>
    )
  }
 }

 ReactDOM.render(<App/>,document.getElementById('app'))