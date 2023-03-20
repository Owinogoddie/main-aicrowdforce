const useCases=require('../models/useCases')
const mongoose=require('mongoose')


//get workouts
const getAllUseCases=async(req,res)=>{
  try {
      const usecases=await useCases.find({}).sort({createdAt:-1})
      res.status(200).json(usecases)
      // console.log(usecases)
      
  } catch (error) {
      res.status(400).json({error:error.message})
      
  }
}

const getByCategory=async(req,res)=>{
  try {
    const category = req.params.category;
      const usecases=await useCases.find({category: category}).sort({createdAt:-1})
      res.status(200).json(usecases)
      // console.log(usecases)
      
  } catch (error) {
      res.status(400).json({error:error.message})
      
  }
}


//get single workout
const getSingleUseCase=async(req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error : 'id is not valid'})
    }
    try {
        const usecases=await useCases.findById(id)

    if (!usecases){
        res.status(400).json({error:'No such workout'})
    }
        res.status(200).json(usecases)

    }catch (error) {
        res.status(400).json({error:error.message})
        
    }
}
//localhost:4000/api/workouts/6410beb51beedab28e919c3a
//create new workout
const createUseCase=async (req,res)=>{
    try {
        
  const { name, description, price, categoryId } = req.body;
        
        // Create a new form object
        const form = new useCases({
            
          title: req.body.title,
          description: req.body.description,
          image: req.file.filename,
          useCaseCategory:req.body.category
        });
        // Save the form to the database
        await form.save();
        res.status(200).json({form:form});
      } catch (error) {
        res.status(500).send('Error submitting form');
      }
}




//delete a workout
const deleteUseCase=async(req, res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'no such id'})
    }
    try {
        const deleted=await useCases.findByIdAndDelete({_id:id})
        if(!deleted){
            return res.status(400).json({error:'No such Item'})
        }

        res.status(400).json({deleted:'deleted'})
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
        
    }
}


//update a workout
const updateUseCase = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'no such id' });
    }
    try {
      const usecases = await useCases.findOneAndUpdate(
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


module.exports={createUseCase,getAllUseCases,getSingleUseCase,deleteUseCase,updateUseCase,getByCategory}