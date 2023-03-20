
const mongoose=require('mongoose')
const whyUs = require('../models/WhyUs')


//get workouts
const getAllwhyUs=async(req,res)=>{
    try {
        const response=await whyUs.find({}).sort({createdAt:-1})
        res.status(200).json({data:response})
        // console.log(whyUs)
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}


//get single workout
const getSingleWhyUs=async(req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error : 'id is not valid'})
    }
    try {
        const response=await whyUs.findById(id)

    if (!response){
        res.status(400).json({error:'No such workout'})
    }
        res.status(200).json(response)

    }catch (error) {
        res.status(400).json({error:error.message})
        
    }
}
//localhost:4000/api/workouts/6410beb51beedab28e919c3a
//create new workout
const createWhyUs=async (req,res)=>{
    try {
        
  const { name, description, price, categoryId } = req.body;
        
        // Create a new form object
        const form = new whyUs({
            
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
const deleteWhyUs=async(req, res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'no such id'})
    }
    try {
        const deleted=await whyUs.findByIdAndDelete({_id:id})
        if(!deleted){
            return res.status(400).json({error:'No such Item'})
        }

        res.status(400).json({deleted:'deleted'})
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
        
    }
}
//update a workout
const updateWhyUs = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'no such id' });
    }
    try {
      const usecases = await whyUs.findOneAndUpdate(
        { _id: id },
        { ...req.body },
        { new: true } // add this option to return the updated document
      );
      if (!usecases) {
        return res.status(400).json({ error: 'no such' });
      }
  
      res.status(200).json(usecases);
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };


module.exports={createWhyUs,getAllwhyUs,getSingleWhyUs,deleteWhyUs,updateWhyUs}