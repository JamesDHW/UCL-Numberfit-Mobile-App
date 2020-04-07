var express   =   require('express');
var url       =   require('url');
var cors      =   require('cors');
var mongoose  =   require('mongoose');

var app = express();
app.use(cors());

// app.use(express.static(__dirname));

app.get("/test", (req, res) => {
  res.send("TEST MESSAGE")
})

app.get('/register', (req, res) => {
  res.send(req.query.name)
})

mongoose.connect('mongodb://localhost:27017', (err) => {
  if(err){
    console.log('Error =>', err)
  } else{
    console.log('Connected to MongoDB')
  }
})

var server = app.listen(3000, () => {
  console.log('server listening on port 3000', server.address().port)
})
