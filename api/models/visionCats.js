//define how our workouts should be
//pass an object as the second argument of timestamps true
const mongoose=require('mongoose')
const Schema=mongoose.Schema


const useCaseSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true

    }



},{timestamps:true})

module.exports=mongoose.model('visionCat',useCaseSchema)

//schema describes the structure of the model