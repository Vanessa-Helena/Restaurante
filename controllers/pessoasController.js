
const {Pessoa} = require('../models');
const {Router} = require('express');

const roteador = Router();

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

app.delete('/pessoas/:id', (req, res)=>{
    const {id} = req.params;
    const pessoa = pessoas.find(p => p.id === Number(id));
    res.redirect('/pessoas');
})
