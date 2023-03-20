
const express=require('express')
const visionModel=require('../models/visions')


const {createVision,getAllVisions,getSingleVision,deleteVision,updateVision,getByCategory}=require('../controllers/visionsController')
const router=express.Router()


router.get('/',getAllVisions)
router.get('/:category',getByCategory)

router.get('/:id',getSingleVision
  );

  
  
  router.post('/', async (req, res) => {
    try {
      const form = new visionModel({
        title: req.body.title,
        description: req.body.description,
        image:req.body.image,
        category:req.body.category
      });
      await form.save();
      res.status(200).json({data:form});
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });
  

router.put('/:id',updateVision)


router.delete('/:id',deleteVision)
module.exports=router



