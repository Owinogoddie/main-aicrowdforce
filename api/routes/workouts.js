const express=require('express')
const Workout=require('../models/workoutModel')

const {createWorkout,getAllWorkouts,getSingleWorkout,deleteWorkout,updateWorkout}=require('../controllers/workoutController')
const router=express.Router()


router.get('/',getAllWorkouts)

router.get('/:id',getSingleWorkout
  );


router.post('/',createWorkout)

router.patch('/:id',updateWorkout)


router.delete('/:id',deleteWorkout)
module.exports=router