const Workout=require('../models/workoutModel')
const mongoose=require('mongoose')

//get workouts
const getAllWorkouts=async(req,res)=>{
    try {
        const workouts=await Workout.find({}).sort({createdAt:-1})
        res.status(200).json(workouts)
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

//get single workout
const getSingleWorkout=async(req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error : 'id is not valid'})
    }
    try {
        const workout2=await Workout.findById(id)

    if (!workout2){
        res.status(400).json({error:'No such workout'})
    }
        res.status(200).json(workout2)

    }catch (error) {
        res.status(400).json({error:error.message})
        
    }
}
//localhost:4000/api/workouts/6410beb51beedab28e919c3a
//create new workout
const createWorkout=async (req,res)=>{
    const{title,load,reps}=req.body 

    try {
        const workout1=await Workout.create({title,load,reps})
        res.status(200).json(workout1)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }

}




//delete a workout
const deleteWorkout=async(req, res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'no such id'})
    }
    try {
        const deleted=await Workout.findByIdAndDelete({_id:id})
        if(!deleted){
            return res.status(400).json({error:'No such workout'})
        }

        res.status(400).json({deleted:deleted})
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
        
    }
}
//update a workout

const updateWorkout=async(req, res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'no such id'})
    }
    try {
        const workout=await Workout.findOneAndUpdate({_id:id},{...req.body})
        if(!workout){
            return res.status(400).json({error:'No such workout'})
        }

        res.status(200).json(workout)
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
        
    }
}


module.exports={createWorkout,getAllWorkouts,getSingleWorkout,deleteWorkout,updateWorkout}