const express = require("express");
const app = express();
const port = 5000;

app.get('/sobre',(req,res)=>{
    res.send(`
    <html>
        <body>
            <style>
                body{
                            background-color:black;
                }
                
                h2 {
                    color:white;
                }
            </style>
        </body>
        <h2>Página Sobre</h2>
        <script>
        alert("Salve");
        </script>
    </html>
    `);
})

app.get('/',(req,res)=>{
    res.send(`
    <html>
        <body>
            <style>
                body{
                            background-color:black;
                }
                
                h2 {
                    color:white;
                }
            </style>
        </body>
        <h2>Meu Primeiro website com nodejs</h2>
        <script>
        alert("opa");
        </script>
    </html>
    `);
});

app.listen(port,()=> { 
    console.log("Servidor rodando.");
})