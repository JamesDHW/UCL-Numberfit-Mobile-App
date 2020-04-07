var express   =   require('express');
var url       =   require('url');
var cors      =   require('cors');
var mongoose  =   require('mongoose');

var app = express();
app.use(cors());


var MongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb://localhost:27017/";
// app.use(express.static(__dirname));

app.get("/test", (req, res) => {
  res.send("TEST MESSAGE")
})

// GET request to call when registering
app.get('/register', (req, res) => {
  MongoClient.connect(mongoUrl, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var user = { name: req.query.fName};
    dbo.collection("users").insertOne(user, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
    dbo.collection("users").findOne({name: "james"}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
  });
})

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("users", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

// mongoose.connect('mongodb://localhost:27017', (err) => {
//   if(err){
//     console.log('Error =>', err)
//   } else{
//     console.log('Connected to MongoDB')
//   }
// })

var server = app.listen(3000, () => {
  console.log('server listening on port 3000', server.address().port)
})
