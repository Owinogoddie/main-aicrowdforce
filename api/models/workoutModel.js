//define how our workouts should be
//pass an object as the second argument of timestamps true
const mongoose=require('mongoose')
const Schema=mongoose.Schema

const workoutSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true

    }


},{timestamps:true})

module.exports=mongoose.model('Workout',workoutSchema)

//schema describes the structure of the model