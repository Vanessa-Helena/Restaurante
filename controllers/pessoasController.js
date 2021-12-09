
const {Pessoa} = require('../models');
const {Router} = require('express');
const { where } = require('sequelize/dist');

const roteador = Router();

app.get('/', async(req, res) => {
    const pessoas = await Pessoa.finAll();
    res.render('pessoas/index', {pessoas});
});

app.get('/novo', (req, res) => {
    res.render('pessoas/novo');
});

app.get('/:id', async(req, res) => {
    const {id} = req.params;
    let pessoa = await Pessoa.findByPk({id});
    
    res.render('pessoas/apresenta', {pessoa});
});

app.get('/:id/edit', async(req, res) => {
    const {id} = req.params;
    let pessoa = await Pessoa.findByPk({id});
    
    res.render('pessoas/editar', {pessoa});
});

app.post('/', async(req, res) => {
    const {nome, registro} = req.body;
    await Pessoa.create({nome, registro});
    res.redirect('/pessoas');
});

app.patch('/:id', async(req, res) => {
 
    const pessoa = req.body.pessoa;

    await Pessoa.update (
        {pessoa},
        {
            where: {id: req.params.id}
        }
    );
    res.redirect('/pessoas');
});

app.delete('/:id', async(req, res)=>{

    await Pessoa.destroy (
        {
            where: {id: req.params.id}
        }
    );

    res.redirect('/pessoas');
})
