//define how our workouts should be
//pass an object as the second argument of timestamps true
const mongoose=require('mongoose')
const Schema=mongoose.Schema

const useCaseCategory=require('../models/useCaseCategory')

const useCaseSchema=new Schema({
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

    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },



},{timestamps:true})

module.exports=mongoose.model('useCase',useCaseSchema)

//schema describes the structure of the model