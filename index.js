const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended:true}));

app.use(express.json());

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
    res.render('home');
});

app.get('/pessoas', (req, res) => {
    res.render('pessoas/index', {pessoas});
});

app.get('/pessoas/novo', (req, res) => {
    res.render('pessoas/novo');
});

app.post('/pessoas', (req, res) => {
    const {nome, registro} = req.body;
    pessoas.push({nome, registro});
    res.redirect('/pessoas');
});

app.listen(3000, ()=>{
    console.log("Ouvindo na porta 3000!")   
});

