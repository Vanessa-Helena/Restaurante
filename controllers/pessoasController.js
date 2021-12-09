
const {Pessoa} = require('../models');
const {Router} = require('express');
const { where } = require('sequelize/dist');

const roteador = Router();

roteador.app.get('/', async(req, res) => {
    const pessoas = await Pessoa.finAll();
    res.render('pessoas/index', {pessoas});
});

roteador.app.get('/novo', (req, res) => {
    res.render('pessoas/novo');
});

roteador.app.get('/:id', async(req, res) => {
    const {id} = req.params;
    let pessoa = await Pessoa.findByPk({id});
    
    res.render('pessoas/apresenta', {pessoa});
});

roteador.app.get('/:id/edit', async(req, res) => {
    const {id} = req.params;
    let pessoa = await Pessoa.findByPk({id});
    
    res.render('pessoas/editar', {pessoa});
});

roteador.app.post('/', async(req, res) => {
    const {nome, registro} = req.body;
    await Pessoa.create({nome, registro});
    res.redirect('/pessoas');
});

roteador.app.patch('/:id', async(req, res) => {
 
    const pessoa = req.body.pessoa;

    await Pessoa.update (
        {pessoa},
        {
            where: {id: req.params.id}
        }
    );
    res.redirect('/pessoas');
});

roteador.app.delete('/:id', async(req, res)=>{

    await Pessoa.destroy (
        {
            where: {id: req.params.id}
        }
    );

    res.redirect('/pessoas');
});

module.exports = roteador;
