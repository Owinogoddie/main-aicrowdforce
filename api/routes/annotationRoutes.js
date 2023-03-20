const express=require('express')
const AnnotationType=require('../models/annotationTypesModel')


const {createAnnotation,getAllannotations,getSingleAnnotation,deleteAnnotation,updateAnnotation}=require('../controllers/annotationcontroller')
const router=express.Router()


router.get('/',getAllannotations)

router.get('/:id',getSingleAnnotation
  );

  
  
  router.post('/', async (req, res) => {
    try {
      const form = new AnnotationType({
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
  

router.put('/:id',updateAnnotation)


router.delete('/:id',deleteAnnotation)
module.exports=router



