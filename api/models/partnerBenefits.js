//define how our workouts should be
//pass an object as the second argument of timestamps true
const mongoose=require('mongoose')
const Schema=mongoose.Schema

const expertiseSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true

    }


},{timestamps:true})

module.exports=mongoose.model('partnerBenefits',expertiseSchema)

//schema describes the structure of the model