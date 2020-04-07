var express = require('express');
var cors = require('cors')
var mongoose = require('mongoose')

var app = express();
app.use(cors())

// app.use(express.static(__dirname));

app.get('/test', (req, res) => {
  res.send("TEST MESSAGE")
})


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Numberfitmain:numberfit1234@comp0067g12-16fzq.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  if(err) {
    console.log(err)
  } else{
    console.log('CONNECTION TO MONGODB SUCCESSFUL')
  }
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
