const app = require('express')();
const path = require('path')

app.post('/',(req,res)=>{
    //res.json({message:'Building an CI Pipline'})
    res.sendFile(path.join(__dirname,'./public/index.html'));
    
});

const port = process.env.PORT || 8080;

app.listen(port,()=> console.log(`app listen at http://localhost:${port}`));