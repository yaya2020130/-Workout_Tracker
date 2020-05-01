const mongoose=require("mongoose");
const Schema = mongoose.Schema


const ExerciseSchema = new Schema({
    name:{
        type:String,
        required:true
    },
   type:String,
    duration:Number,
    weight:Number,
    reps:Number,
    sets:Number,
    distance:{
        type:Number,
        validate:{
            validator:function(){
                return this.type===String
            },
            message:"This is for cardio exercise only"
        }
    }


 
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;

