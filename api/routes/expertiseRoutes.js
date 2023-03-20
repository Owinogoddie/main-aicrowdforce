
const express=require('express')
const ourExpertise=require('../models/ourExpertise')


const {createExpertise,getAllexpertise,getSingleExpertise,deleteExpertise,updateExpertise}=require('../controllers/ourExpertiseController')
const router=express.Router()


router.get('/',getAllexpertise)

router.get('/:id',getSingleExpertise
  );

  
  
  router.post('/', async (req, res) => {
    try {
      const form = new ourExpertise({
        title: req.body.title,
        description: req.body.description,
        image:req.body.image
      });
      await form.save();
      res.status(200).json({data:form});
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });
  

router.put('/:id',updateExpertise)


router.delete('/:id',deleteExpertise)
module.exports=router


