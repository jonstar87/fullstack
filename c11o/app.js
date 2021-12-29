const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3060, ()=>{
    console.log('Servidor funcionando ML desafio online home');
});

app.get('/home', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});