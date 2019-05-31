const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const db = require('../Database/components.js')
const cors = require('cors')
const PORT = process.env.PORT || 3002

app.use(cors())

app.use(bodyParser.json())
app.use(morgan('combined'))
app.use('/hotels/:id',express.static(path.resolve(__dirname,'../client/dist/')))
app.use('/',express.static(path.resolve(__dirname,'../client/dist/')))

app.get('/review/:hotelID',(req,res)=>{
  db.findAll(req.params.hotelID,(err,result)=>{
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

app.listen(PORT, (err) => {
  if (err) throw err
  else {
    console.log(`server is listening on ${PORT}`)
  }
})
