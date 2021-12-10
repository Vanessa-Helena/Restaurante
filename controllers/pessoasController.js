const {Pessoa} = require('../models');
const {Router} = require('express');
const {where} = require('sequelize/dist');

const roteador = Router();

roteador.get('/', async(req, res) => {
    const pessoas = await Pessoa.findAll();
    res.render('pessoas/index', {pessoas});
});

roteador.get('/novo', (req, res) => {
    res.render('pessoas/novo');
});

roteador.get('/:id', async(req, res) => {
    const {id} = req.params;
    let pessoa = await Pessoa.findByPk(id);
    
    res.render('pessoas/apresenta', {pessoa});
});

roteador.get('/:id/edit', async(req, res) => {
    const {id} = req.params;
    let pessoa = await Pessoa.findByPk(id);
    
    res.render('pessoas/editar', {pessoa});
});

roteador.get('/:id/delete', async(req, res) => {
    const {id} = req.params;
    let pessoa = await Pessoa.findByPk(id);
    
    res.render('pessoas/delete', {pessoa});
});

roteador.post('/', async(req, res) => {
    const {nome, registro} = req.body;
    await Pessoa.create({nome, registro});
    res.redirect('/pessoas');
});

roteador.patch('/:id', async(req, res) => {
 
    const people = req.body.pessoa;

    await Pessoa.update (
        {people},
        {
            where: {id: req.params.id}
        }
    );
    res.redirect('/pessoas');
});

roteador.delete('/:id', async(req, res)=>{

    await Pessoa.destroy (
        {
            where: {id: req.params.id}
        }
    );

    res.redirect('/pessoas');
});

module.exports = roteador;
