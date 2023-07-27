const express = require("express");
const app = express();

//Servir Contenido

app.use(express.static('public'))


app.get("/", (req, res) =>{
    res.sendFile(__dirname + '/public/index.html');
})

app.get("/generic", (req, res) =>{
    res.sendFile(__dirname + '/public/generic.html');
});

app.get("/elements", (req, res) =>{
    res.sendFile(__dirname + '/public/elements.html');
});

app.get("*", (req, res)=>{
    res.send("404 | Error Page Not Found")
})

app.listen(3000);