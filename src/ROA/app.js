const express = require('express')
const path = require('path')
const which = require('./models/which-topic')
const app = express()


app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.htm')))


app.get('/predict/:sentence', ({ params }, res) => {
  
  let sentence = decodeURIComponent(params.sentence)

  res.set('content-type', 'text/json')
  res.end(JSON.stringify(which(sentence)))
})


console.log('app listening on port 7000')
app.listen(7000)
