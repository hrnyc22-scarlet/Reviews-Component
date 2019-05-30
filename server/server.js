const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const db = require('../Database/components.js')
const port = process.env.PORT || 3000
// const router = require('./router.js')

app.use(bodyParser.json())
app.use(morgan('combined'))
// app.use('/',router)
app.use('/',express.static(path.resolve(__dirname,'../client/dist/')))

app.get('/reviews',(req,res)=>{
  db.findAll((err,result)=>{
    if (err) {
      console.log('error',err)
      res.sendStatus(500)
    }
    else {
      console.log('success',result)
      res.send(result)
    }
  })
})

app.listen(port, (err) => {
  if (err) throw err
  else {
    console.log(`server is listening on ${port}`)
  }
})
