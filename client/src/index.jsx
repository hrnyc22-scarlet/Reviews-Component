import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import Reviews from "./components/reviews.jsx"

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

  render () {
    return (
      <div onClick={this.state.popUp ? this.popDown : ''}> 
        {this.state.data.length > 0 && <Reviews reviews={this.state.data} popUp={this.popUp} popUpStatus={this.state.popUp}/>}
      </div>
    )
  }
 }

 ReactDOM.render(<App/>,document.getElementById('app'))