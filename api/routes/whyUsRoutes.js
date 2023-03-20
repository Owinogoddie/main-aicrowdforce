
const express=require('express')
const whyUs=require('../models/WhyUs')


const {createWhyUs,getAllwhyUs,getSingleWhyUs,deleteWhyUs,updateWhyUs}=require('../controllers/whyUsController')
const router=express.Router()


router.get('/',getAllwhyUs)

router.get('/:id',getSingleWhyUs
  );

  
  router.post('/', async (req, res) => {
    try {
      const form = new whyUs({
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

router.put('/:id',updateWhyUs)


router.delete('/:id',deleteWhyUs)
module.exports=router


