
const {Pessoa} = require('../models');
const {Router} = require('express');

const roteador = Router();

app.get('/', async(req, res) => {
    const pessoas = await Pessoa.finAll();
    res.render('pessoas/index', {pessoas});
});

app.get('/novo', (req, res) => {
    res.render('pessoas/novo');
});

app.get('/:id', (req, res) => {
    const {id} = req.params;
    const pessoa = pessoas.find(p=> p.id === Number(id));
    
    res.render('/apresenta', {pessoa});
});

app.get('/:id/edit', (req, res) => {
    const {id} = req.params;
    const pessoa = pessoas.find(p=> p.id === Number(id));
    
    res.render('/editar', {pessoa});
});

app.post('/', (req, res) => {
    const {nome, registro} = req.body;
    pessoas.push({nome, registro});
    res.redirect('/pessoas');
});

app.patch('/:id', (req, res) => {
    const {id} = req.params;

    const novoUsuario = req.body.pessoa;
    const pessoa = pessoas.find(p => p.id === Number(id));
    pessoa.nome = novoUsuario;
    res.redirect('/pessoas');
});

app.delete('/:id', (req, res)=>{
    const {id} = req.params;
    const pessoa = pessoas.find(p => p.id === Number(id));
    res.redirect('/pessoas');
})
