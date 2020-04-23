const School  = require('../config/schema').School; // Mongoose model


module.exports.add_school = function (req, res, next) {
  // CODE TO ADD NEW SCHOOL SET IN /config/verif-codes.json
  var code = require('../config/verif-codes.json').add_school;
  if(req.query.code == code){
    var school = new School({
      name : req.query.name
    })

    school.save((err) => {
      if (err) throw err;
      res.send("Saved!")
    });
  }
};
