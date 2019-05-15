const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
// const router = require('./router.js')

app.use(bodyParser.json())
app.use(morgan('combined'))
// app.use('/',router)
app.use('/',express.static(path.resolve(__dirname,'../client/dist/')))

const port = 3000
app.listen(port, (err) => {
  if (err) throw err
  else {
    console.log(`server is listening on ${port}`)
  }
})
