const express= require('express');
const bodyParser=require('body-parser'); 
const path = require('path');
const app = express(); 
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.get('/', (req, res) => {
    res.render('form');
});
app.post('/submit',(req,res)=>{
    const { name, regNo } = req.body; 
    res.render('formresult',{name,regNo});
});
app.listen(3000,()=>{
    console.log("Serverrunningathttp://localhost:3000/");
});
