const express = require("express");
const app = express();
const port = 5000;

// Não recomendado criar as páginas dentro do código nodejs
// app.get('/',(req,res)=>{
//     res.send(`
//     <html>
//         <body>
//             <style>
//                 body{
//                             background-color:black;
//                 }        
//                 h2 {
//                     color:white;
//                 }
//             </style>
//         </body>
//         <h2>Meu Primeiro website com nodejs</h2>
//         <script>
//         alert("opa");
//         </script>
//     </html>
//     `);
// });

const path = require('path');

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'))
});

app.listen(port,()=> { 
    console.log("Servidor rodando.");
})