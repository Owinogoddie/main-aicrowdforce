
const express=require('express')
const useCaseCategory=require('../models/useCaseCategory')


const {createCategory,getAllCategories,getSingleCategory,deleteCategory,updateCategory}=require('../controllers/useCaseCategoryController')
const router=express.Router()


router.get('/',getAllCategories)

router.get('/:id',getSingleCategory
  );

  
  
 router.post('/', async (req, res) => {
    try {
      const form = new useCaseCategory({
        category: req.body.title
      });
      await form.save();
      res.status(200).json({data:form});
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });
  

router.patch('/:id',updateCategory)


router.delete('/:id',deleteCategory)
module.exports=router


