const AnnotationType=require('../models/annotationTypesModel')

const mongoose=require('mongoose')


//get workouts
const getAllannotations=async(req,res)=>{
  try {
      const visions=await AnnotationType.find({}).sort({createdAt:-1})
      res.status(200).json(visions)
      // console.log(usecases)
      
  } catch (error) {
      res.status(400).json({error:error.message})
      
  }
}



//get single workout
const getSingleAnnotation=async(req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error : 'id is not valid'})
    }
    try {
        const vision=await AnnotationType.findById(id)

    if (!vision){
        res.status(400).json({error:'No such workout'})
    }
        res.status(200).json(vision)

    }catch (error) {
        res.status(400).json({error:error.message})
        
    }
}
//localhost:4000/api/workouts/6410beb51beedab28e919c3a
//create new workout
const createAnnotation=async (req,res)=>{
    try {
        
  const { name, description, price, categoryId } = req.body;
        
        // Create a new form object
        const form = new visionsModel({
            
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
const deleteAnnotation=async(req, res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'no such id'})
    }
    try {
        const deleted=await AnnotationType.findByIdAndDelete({_id:id})
        if(!deleted){
            return res.status(400).json({error:'No such Item'})
        }

        res.status(400).json({deleted:'deleted'})
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
        
    }
}


//update a workout
const updateAnnotation = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'no such id' });
    }
    try {
      const usecases = await AnnotationType.findOneAndUpdate(
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



module.exports={createAnnotation,getAllannotations,getSingleAnnotation,deleteAnnotation,updateAnnotation}