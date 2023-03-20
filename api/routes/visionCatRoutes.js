
const express=require('express')
const cats=require('../models/visionCats')


const {createVisionCat,getAllvisionCats,getSingleVisionCat,deleteVisionCat,updateVisionCat}=require('../controllers/visionCatsController')
const router=express.Router()


router.get('/',getAllvisionCats)

router.get('/:id',getSingleVisionCat
  );

  router.post('/', async (req, res) => {
    try {
      const form = new cats({
        title: req.body.title,
        image:req.body.image
      });

      await form.save();
      res.status(200).json({data:form});
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });
  

router.put('/:id',updateVisionCat)


router.delete('/:id',deleteVisionCat)
module.exports=router


