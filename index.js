const methodOverride = require('method-override');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let pessoas = [
    {
        id: 1,
        nome: "Vanessa",
        registro: 123
    },
    {
        id: 2,
        nome: "Carlos",
        registro: 456
    },
    {
        id: 3,
        nome: "Tomoyo",
        registro: 789
    },
    {
        id: 4,
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

app.get('/pessoas/:id', (req, res) => {
    const {id} = req.params;
    const pessoa = pessoas.find(p=> p.id === Number(id));
    
    res.render('pessoas/apresenta', {pessoa});
});

app.get('/pessoas/:id/edit', (req, res) => {
    const {id} = req.params;
    const pessoa = pessoas.find(p=> p.id === Number(id));
    
    res.render('pessoas/editar', {pessoa});
});

app.post('/pessoas', (req, res) => {
    const {nome, registro} = req.body;
    pessoas.push({nome, registro});
    res.redirect('/pessoas');
});

app.patch('/pessoas/:id', (req, res) => {
    const {id} = req.params;

    const novoUsuario = req.body.pessoa;
    const pessoa = pessoas.find(p => p.id === Number(id));
    pessoa.nome = novoUsuario;
    res.redirect('/pessoas');
});


app.listen(3000, ()=>{
    console.log("Ouvindo na porta 3000!")   
});

