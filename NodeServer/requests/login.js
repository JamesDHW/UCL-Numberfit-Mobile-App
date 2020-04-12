const passport = require('passport');

const login = function (req, res, next) {
  passport.authenticate('local', function(err, user, info){
    console.log("err 1")
    if(err){
      console.log("err 2:", err)
      return res.status(400).json({ errors:err });
    }
    if(!user){
      console.log("err 3")
      return res.status(400).json({ errors:"No user found" });
    }
    console.log(user)
    req.login(user, function(err){
      if(err){
        console.log("err 4: ", err)
        return res.status(400).json({ errors:err });
      }
      console.log("err 5")
      return res.status(200).json({ success:"logged in as " + user.id });
    });
  })(req, res, next);
}

module.exports = {
  login
};
