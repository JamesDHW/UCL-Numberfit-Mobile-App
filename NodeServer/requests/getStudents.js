const Pupil  = require('../config/schema').Pupil; // Mongoose model
const User  = require('../config/schema').User; // Mongoose model

module.exports.getStudents = function (req, res, next) {

  User.findOne({_id:req.query.cookie}, null, {}, (err, user) => {
    if(err){ throw err }
    Pupil.find({teacher : user.username}, null, {}, (err, docs) => {
      if(err){ throw err }
      // console.log(req.query.school)
      return res.status(200).json({ students : docs });
    })
  })
};
