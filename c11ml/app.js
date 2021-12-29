const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3050, ()=>{
    console.log('Servidor funcionando ML by profes');
});

app.get('/home', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});