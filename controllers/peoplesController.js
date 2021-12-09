
const {People} = require('../models');
const {Router} = require('express');
const { where } = require('sequelize/dist');

const roteador = Router();

roteador.get('/', async(req, res) => {
    const peoples = await People.finAll();
    res.render('peoples/index', {peoples});
});

roteador.get('/novo', (req, res) => {
    res.render('peoples/novo');
});

roteador.get('/:id', async(req, res) => {
    const {id} = req.params;
    let people = await people.findByPk({id});
    
    res.render('peoples/apresenta', {people});
});

roteador.get('/:id/edit', async(req, res) => {
    const {id} = req.params;
    let people = await people.findByPk({id});
    
    res.render('peoples/editar', {people});
});

roteador.post('/', async(req, res) => {
    const {nome, registro} = req.body;
    await people.create({nome, registro});
    res.redirect('/peoples');
});

roteador.patch('/:id', async(req, res) => {
 
    const people = req.body.people;

    await people.update (
        {people},
        {
            where: {id: req.params.id}
        }
    );
    res.redirect('/peoples');
});

roteador.delete('/:id', async(req, res)=>{

    await people.destroy (
        {
            where: {id: req.params.id}
        }
    );

    res.redirect('/peoples');
});

module.exports = roteador;
