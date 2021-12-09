const {Pessoas} = require('../models');
const {Router} = require('express');
const { where } = require('sequelize/dist');

const roteador = Router();

roteador.get('/', async(req, res) => {
    const pessoas = await Pessoas.findAll();
    res.render('pessoas/index', {pessoas});
});

roteador.get('/novo', (req, res) => {
    res.render('pessoas/novo');
});

roteador.get('/:id', async(req, res) => {
    const {id} = req.params;
    let pessoa = await Pessoas.findByPk({id});
    
    res.render('pessoas/apresenta', {pessoa});
});

roteador.get('/:id/edit', async(req, res) => {
    const {id} = req.params;
    let pessoa = await Pessoas.findByPk({id});
    
    res.render('pessoas/editar', {pessoa});
});

roteador.post('/', async(req, res) => {
    const {nome, registro} = req.body;
    await Pessoas.create({nome, registro});
    res.redirect('/pessoas');
});

roteador.patch('/:id', async(req, res) => {
 
    const pessoa = req.body.pessoa;

    await Pessoas.update (
        {pessoa},
        {
            where: {id: req.params.id}
        }
    );
    res.redirect('/pessoas');
});

roteador.delete('/:id', async(req, res)=>{

    await Pessoas.destroy (
        {
            where: {id: req.params.id}
        }
    );

    res.redirect('/pessoas');
});

module.exports = roteador;
