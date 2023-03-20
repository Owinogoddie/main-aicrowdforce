const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const cors=require('cors')
const workoutsRoutes=require('./routes/workouts')
const annotationRoutes=require('./routes/annotationRoutes')
const expertiseRoutes=require('./routes/expertiseRoutes')
const useCaseCategoryRoutes=require('./routes/useCaseCategoryRoutes')
const useCaseRoutes=require('./routes/useCaseRoutes')
const WhyUsRoutes=require('./routes/whyUsRoutes')
const visionCatRoutes=require('./routes/visionCatRoutes')
const benefitsRoutes=require('./routes/benefitsRoutes')


// const visionRoutes=require('./routes/visionRoutes')

const allVisionsRoutes=require('./routes/allVisionRoutes')



const app=express();
const bodyParser = require('body-parser');


//middleware
app.use((req,res,next)=>{
    console.log(`path:${req.path}, method:${req.method}`)
    next()
})
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/api/workouts',workoutsRoutes)
app.use('/api/annotations',annotationRoutes)
app.use('/api/expertise',expertiseRoutes)
app.use('/api/casecategory',useCaseCategoryRoutes)
app.use('/api/usecases',useCaseRoutes)
app.use('/api/whyus',WhyUsRoutes)
app.use('/api/visioncats',visionCatRoutes)
// app.use('/api/visions',visionRoutes)
app.use('/api/allvisions',allVisionsRoutes)
app.use('/api/benefits',benefitsRoutes)


// mongoose.connect('mongodb://localhost:27017/netninja-crud')
mongoose.connect(process.env.MONGO_URI)
.then(()=>{  

app.listen(process.env.PORT,()=>{
    console.log(`connected to db and app running on ${process.env.PORT}`)
})

})
.catch((error)=>{
    console.log(error)
})