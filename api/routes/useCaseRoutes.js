
const express=require('express')
const useCases=require('../models/useCases')


const {createUseCase,getAllUseCases,getSingleUseCase,deleteUseCase,updateUseCase,getByCategory}=require('../controllers/useCasesController')
const router=express.Router()


router.get('/',getAllUseCases)
router.get('/:category',getByCategory)

router.get('/:id',getSingleUseCase
  );

  
  
  router.post('/', async (req, res) => {
    try {
      const form = new useCases({
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
  

router.put('/:id',updateUseCase)


router.delete('/:id',deleteUseCase)
module.exports=router


