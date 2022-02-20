const express = require("express");
const app = express();
const port = 5000;

app.get('/',(req,res)=>{
    res.send("<h1> Olá Mundo </h1>");
});

app.listen(port,()=> { 
    console.log("Servidor rodando.");
})