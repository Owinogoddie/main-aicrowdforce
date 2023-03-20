const express = require('express');
const cors=require('cors')
const app = express();
app.use(express.json())
app.use(cors())


app.post('/api/register',(req,res)=>{
  data=req.body
  res.json({data:data})
})

app.get('/', (req, res) => {

    res.json({message:'Hello World!'
});
  });


app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });

  module.exports=app;