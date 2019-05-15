import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import Reviews from "./components/reviews.jsx"

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      data:[]
    }

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

  componentDidMount() {
    this.getAllData()
  }

  render () {
    return (
      <div> 
        {this.state.data.length > 0 && <Reviews reviews={this.state.data}/>}
      </div>
    )
  }
 }

 ReactDOM.render(<App/>,document.getElementById('app'))