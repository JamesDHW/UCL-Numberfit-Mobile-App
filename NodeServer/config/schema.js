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
  teacher  : String,
  points   : Number,
});

// Teacher schema
const Teachers = new Schema({
  username : String,
  name     : String,
  school   : String,
});

const GameHistories = new Schema({
  username  : String,
  correct   : Number,
  incorrect : Number,
  topic     : String,
});

// Game schema
const Schools = new Schema({
  name : String,
});

// Game schema
const Videos = new Schema({
  url : String,
});

// Declaring each Schema
const User    = mongoose.model('users', Users, 'users')
const Pupil   = mongoose.model('pupils', Pupils, 'pupils')
const Teacher = mongoose.model('teachers', Teachers, 'teachers')
const GameHistory = mongoose.model('gamehistories', GameHistories, 'gamehistories')
const School  = mongoose.model('schools', Schools, 'schools')
const Video  = mongoose.model('videos', Videos, 'videos')


// Include all models required to export here!!!
module.exports = {
  User,
  Pupil,
  Teacher,
  GameHistory,
  School,
  Video,
};
