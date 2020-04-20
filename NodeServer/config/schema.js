// Require mongoose to create schema
const mongoose = require('mongoose');

// Base schema
const Schema = mongoose.Schema;

// User schema
const Users = new Schema({
  username : String,
  password : String,
  teacher  : Boolean,
});

// Pupil schema
const Pupils = new Schema({
  username : String,
  name     : String,
  school   : String,
  year     : String,
});

// Teacher schema
const Teachers = new Schema({
  username : String,
  name     : String,
  school   : String,
});

// Game schema
const Game = new Schema({
  topic : String,
  year  : Int,
  played: Int,
  questions   : [],
  answers    : [],
});

// *** read the played value to establish the difficulty level of the game
// val < 9 = beg, 9 < val < 18 = beg, 18 < val < 27 = adv
const GameHistory = new Schema({
  played    : Int,
  correct   : Int,
  incorrect : Int,
});

// Declaring each Schema
const User    = mongoose.model('users', Users, 'users')
const Pupil   = mongoose.model('pupils', Pupils, 'pupils')
const Teacher = mongoose.model('teachers', Teachers, 'teachers')
const Game = mongoose.model('game', Game, 'game')


// Include all models required to export here!!!
module.exports = {
  User,
  Pupil,
  Teacher
};
