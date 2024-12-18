const app = require('express')();

app.get('/',(req,res)=>{
    res.json({message:'Building an CI Pipline'})
})

const port = process.env.PORT || 8080;

app.listen(port,()=> console.log(`app listen at http://localhost:${port}`));