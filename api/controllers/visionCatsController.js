const visioncats=require('../models/visionCats')
const mongoose=require('mongoose')


//get workouts
const getAllvisionCats=async(req,res)=>{
  try {
      const cats=await visioncats.find({}).sort({createdAt:-1})
      res.status(200).json(cats)
      // console.log(visionCats)
      
  } catch (error) {
      res.status(400).json({error:error.message})
      
  }
}




//get single workout
const getSingleVisionCat=async(req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error : 'id is not valid'})
    }
    try {
        const cats=await visioncats.findById(id)

    if (!cats){
        res.status(400).json({error:'No such workout'})
    }
        res.status(200).json(cats)

    }catch (error) {
        res.status(400).json({error:error.message})
        
    }
}
//localhost:4000/api/workouts/6410beb51beedab28e919c3a
//create new workout
const createVisionCat=async (req,res)=>{
    try {
        
  const { name, description, price, categoryId } = req.body;
        
        // Create a new form object
        const form = new visioncats({
            
          title: req.body.title,
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
const deleteVisionCat=async(req, res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'no such id'})
    }
    try {
        const deleted=await visioncats.findByIdAndDelete({_id:id})
        if(!deleted){
            return res.status(400).json({error:'No such Item'})
        }

        res.status(400).json({deleted:'deleted'})
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
        
    }
}


//update a workout
const updateVisionCat = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'no such id' });
    }
    try {
      const cats = await visioncats.findOneAndUpdate(
        { _id: id },
        { ...req.body },
        { new: true } // add this option to return the updated document
      );
      if (!cats) {
        return res.status(400).json({ error: 'no such' });
      }
  
      res.status(200).json(cats);
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };


module.exports={createVisionCat,getAllvisionCats,getSingleVisionCat,deleteVisionCat,updateVisionCat}
