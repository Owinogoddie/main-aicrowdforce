
const express=require('express')
const BenefitsModel=require('../models/partnerBenefits')


const {getAllBenefits,getSingleBenefit,createBenefit,deleteBenefit,updateBenefit}=require('../controllers/partnerBenefitsController')
const router=express.Router()


router.get('/',getAllBenefits)

router.get('/:id',getSingleBenefit
  );

  
  
  router.post('/', async (req, res) => {
    try {
      const form = new BenefitsModel({
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
  

router.put('/:id',updateBenefit)


router.delete('/:id',deleteBenefit)
module.exports=router



