const ourExpertise=require('../models/ourExpertise')
const mongoose=require('mongoose')


//get workouts
const getAllexpertise=async(req,res)=>{
    try {
        const expertise=await ourExpertise.find({}).sort({createdAt:-1})
        res.status(200).json(expertise)
        // console.log(expertise)
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

//get single workout
const getSingleExpertise=async(req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error : 'id is not valid'})
    }
    try {
        const expertise=await ourExpertise.findById(id)

    if (!expertise){
        res.status(400).json({error:'No such workout'})
    }
        res.status(200).json(expertise)

    }catch (error) {
        res.status(400).json({error:error.message})
        
    }
}
//localhost:4000/api/workouts/6410beb51beedab28e919c3a
//create new workout
const createExpertise=async (req,res)=>{
    try {
        
        // Create a new form object
        const form = new ourExpertise({
          title: req.body.title,
          description: req.body.description,
          image: req.file.filename
        });
        // Save the form to the database
        await form.save();
        res.status(200).json({form:form});
      } catch (error) {
        res.status(500).send('Error submitting form');
      }
}




//delete a workout
const deleteExpertise=async(req, res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'no such id'})
    }
    try {
        const deleted=await ourExpertise.findByIdAndDelete({_id:id})
        if(!deleted){
            return res.status(400).json({error:'No such workout'})
        }

        res.status(400).json({deleted:deleted})
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
        
    }
}
//update a workout
const updateExpertise = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'no such id' });
    }
    try {
      const expertise = await ourExpertise.findOneAndUpdate(
        { _id: id },
        { ...req.body },
        { new: true } // add this option to return the updated document
      );
      if (!expertise) {
        return res.status(400).json({ error: 'no such' });
      }
  
      res.status(200).json(expertise);
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };


module.exports={createExpertise,getAllexpertise,getSingleExpertise,deleteExpertise,updateExpertise}