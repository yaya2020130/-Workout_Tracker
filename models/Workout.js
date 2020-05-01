



const mongoose = require('mongoose');
const Schema = mongoose.Schema

const WorkoutSchema = new Schema ({
  name:{
    type:String,
   reqiured:true

  },
  date: {
    type: Date,
    default: Date.now
  },
 
  exercises : [
    {
      type:Schema.Types.ObjectId,
      ref:"Exercise"
    }
  ]
});

 const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;


