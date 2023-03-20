
const express=require('express')
const visionModel=require('../models/allVisions')


const {createAllVision,getAllAllVisions,getSingleAllVision,deleteAllVision,updateAllVision}=require('../controllers/allVisionsController')
const router=express.Router()


router.get('/',getAllAllVisions)

router.get('/:id',getSingleAllVision
  );

  
  
  router.post('/', async (req, res) => {
    try {
      const form = new visionModel({
        title: req.body.title,
        description: req.body.description,
        icon:req.body.icon,
        image:req.body.image
      });
      await form.save();
      res.status(200).json({data:form});
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });
  

router.put('/:id',updateAllVision)


router.delete('/:id',deleteAllVision)
module.exports=router



