var express = require('express');
var cors = require('cors')
var mongoose = require('mongoose')

var port = process.env.port || 3000;
var app = express();
app.use(cors())

app.use(express.static(__dirname));

app.get('/schools', (req, res) => {
  res.send("TEST MESSAGE")
})

mongoose.connect('mongodb://localhost:27017', (err) => {
  if(err){
    console.log('Error =>', err)
  } else{
    console.log('Connected to MongoDB')
  }
})

var server = app.listen(port, () => {
  console.log('server listening on port azure port ', server.address().port)
})
