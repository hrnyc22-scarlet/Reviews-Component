import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import ReviewsComponent from "./components/reviewsComponent/reviews.jsx"
import SearchReviewsComponent from "./components/searchComponent/search.jsx"
import ReviewsSortComponent from "./components/sortComponent/sortContainer.jsx"

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      data:[],
      searchedData: [],
      searchTerm: "",
      filteredData: [],
      ratingFilter: [],
      dateFilter: [],
      tripTypeFilter: [],
      languageFilter: [],
      languageCount: 0,
      ratingCount: 0,
    }
    this.getAllData = this.getAllData.bind(this)
    this.searchReviews = this.searchReviews.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
    this.updateFilter = this.updateFilter.bind(this)
    this.filterData = this.filterData.bind(this)
  }

  clearSearch () {
    this.setState({
      searchedData: []
    })
  }

  updateFilter (rating,date,tripType,language) {
    this.setState((state)=>{
      return {
        "ratingFilter": rating ? rating : state.ratingFilter,
        "dateFilter": date ? date : state.dateFilter,
        "tripTypeFilter": tripType ? tripType : state.tripTypeFilter,
        "languageFilter": language ? language : state.languageFilter
      }
    },()=>{
      this.filterData()
    })
  }

  filterData () {
    let results = []
    let data = this.state.searchedData.length ? this.state.searchedData : this.state.data
    if (this.state.ratingFilter.length || this.state.dateFilter.length || this.state.tripTypeFilter.length || this.state.languageFilter.length){
      results = data.filter((review) => {
        return (
          (this.state.ratingFilter.length ? review.Trip_Rating > this.state.ratingFilter[0] && review.Trip_Rating <= (this.state.ratingFilter[0] + 1) : true)
          && 
          (this.state.dateFilter.length ? this.state.dateFilter.includes(review.Date.split(" ")[0]) : true)
          && 
          (this.state.tripTypeFilter.length ? this.state.tripTypeFilter.includes(review.Trip_Type) : true)
          && 
          (this.state.languageFilter.length ? this.state.languageFilter.includes(review.Language) : true)
        )
      })
    }
    this.setState({
      filteredData: results.length ? results : "empty",
    })
  }

  searchReviews (searchTerm) {
    let results = []
    this.state.data.forEach(function (review) {
      if (review.Body.includes(searchTerm)){
        results.push(review)
      } else if (review.Header.includes(searchTerm)){
        results.push(review)
      }
    })
    this.setState({
      searchedData: results.length ? results : "empty",
      searchTerm: searchTerm
    })
    this.filterData()
  }

  getAllData () {
    // axios.get(`/review/${window.location.href.slice(-2)}`) //for local testing
    axios.get(`http://3.13.140.54:3002/review/${window.location.href.slice(32)}`) //for deployed 
    .then((results)=>{
      this.setState({
        data:results.data
      })
      return results.data
    })
    .then((data)=>{
      let languageCount = {
        "All": data.length,
        "English":0,
        "Latin":0,
        "Spanish":0,
        "German":0
      }
      let ratingCount = {
        "total": data.length,
        "5":0,
        "4":0,
        "3":0,
        "2":0,
        "1":0
      }
      data.forEach(function(review){
        ratingCount[review.Trip_Rating] = ratingCount[review.Trip_Rating] + 1
        languageCount[review.Language] = languageCount[review.Language] + 1
      })
      this.setState({
        "ratingCount":ratingCount,
        "languageCount":languageCount
      })
    })
    .catch((err)=>{
      console.log('error getting data',err)
    })
  }

  componentDidMount() {
    this.getAllData()
  }
  render () {
    let data = this.state.searchedData.length ? this.state.searchedData : this.state.data; //need to fix the state
    data = this.state.filteredData.length && this.state.filteredData !== "empty" ? this.state.filteredData : data; //need to fix the state
    return (
      <div>
        <ReviewsSortComponent 
          updateFilter={this.updateFilter} 
          languageCount={this.state.languageCount}
          ratingCount={this.state.ratingCount}
        />
        <SearchReviewsComponent search={this.searchReviews}/>
        <div className="reviews-list-container">
          { typeof data === "string" && 
            <div className="no-results-search">No results found. <b>Try</b> removing a filter, changing your search, or 
              <span onClick={this.clearSearch} className="clear-all"> clear all </span> 
              to read reviews.
            </div>
          }
          { typeof data === 'object' && 
            data.slice(0,10).map((reviewData)=>{
              return (
                <div className="review-container"> 
                  <ReviewsComponent 
                    reviewData={reviewData} 
                    popUpStatus={this.state.popUp} 
                    searchTerm={this.state.searchTerm}
                  />  
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
 }

 ReactDOM.render(<App/>,document.getElementById('reviews'))