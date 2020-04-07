var express   =   require('express');
var url       =   require('url');
var cors      =   require('cors');
var mongoose  =   require('mongoose');

var app = express();
app.use(cors());

var MongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb+srv://Numberfitmain:numberfit1234@COMP0067G12-16fzq.azure.mongodb.net/test?retryWrites=true&w=majority";

// GET request to call when registering
app.get('/register', (getReq, getRes) => {
  MongoClient.connect(mongoUrl, function(err, db) {
    if (err) { throw err } //else{ console.log("success") };
    var dbObj = db.db("NumberfitDB");
    var user = {
      email:    getReq.query.email,
      name:     getReq.query.name,
      school:   getReq.query.school,
      year:     getReq.query.year,
      //teacher:  getReq.query.teacher
    };

    // check if user email provided already exists
    dbObj.collection("users").find({ email: getReq.query.email }, {$exists: true})
    .toArray(function(err, result) {
      if (err) throw err;
      if (result.length == 0){
        // If there is no user with a matching email
        dbObj.collection("users").insertOne(user, function(err) {
          if (err) { throw err } //else{ console.log("success") };
          // TODO: sign user in using passport.js
          // Send back response to GET request saying that the user is registered
          getRes.send("OK")
        });
      } else { getRes.send("alreadyExists") }
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
