const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const path = require('path')

// app.use('/static', express.static('public'))
// path.join(__dirname+'public/index.html')
function getpage(Page){
  return path.join(__dirname+'/public/'+Page)
}

app.get('/', (req, res) => {
  res.sendFile(getpage('index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})