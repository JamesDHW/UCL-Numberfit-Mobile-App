var express = require('express');
var cors = require('cors')
var mongoose = require('mongoose')

var app = express();
app.use(cors())

// app.use(express.static(__dirname));

app.get('/test', (req, res) => {
  res.send("TEST MESSAGE")
})

var server = app.listen(3000, () => {
  console.log('server listening on port 3000', server.address().port)
})
