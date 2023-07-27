const express = require("express");
const hbs = require('hbs');

const app = express();

//Handlebar
app.set('view engine', 'hbs')
hbs.registerPartials( __dirname + 'views/partials');

//Servir Contenido
app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.render('home', {
        nombre: 'Angie Cohen',
        titulo: 'Curso de Node'
    });
})

/*app.get("/", (req, res) =>{
    res.sendFile(__dirname + '/public/index.html');
})
*/

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