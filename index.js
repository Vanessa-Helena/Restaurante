const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let pessoas = [
    {
        nome: "Vanessa",
        registro: 123
    },
    {
        nome: "Carlos",
        registro: 456
    },
    {
        nome: "Tomoyo",
        registro: 789
    },
    {
        nome: "Shiryu",
        registro: 101
    }
] 

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/pessoa', (req, res) => {
    res.render('pessoas/index')
});

app.listen(3000, ()=>{
    console.log("Ouvindo na porta 3000!")   
});

