const mongoose = require('mongoose');
const Schema = mongoose.Schema

const workoutSchema = new Schema ({
  dateTime : {
    type: String,
    default: ()=> new Date()
  },
  exercises : {
    type: Array,
    default: []
  }
})

module.exports = mongoose.model('Workout', workoutSchema)
