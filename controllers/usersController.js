const {Pessoa, User} = require('../models');
const {Router} = require('express');

const roteador = Router();

roteador.get('/', async(req, res)=>{

});

roteador.get('/login', (req, res)=>{
    res.render('usuarios/login');
});

roteador.get('/logoff', (req, res)=>{
    req.session.destroy();
    res.redirect('/usuarios/login');
});

roteador.get('/novo', (req, res)=>{
    res.render('usuarios/novo');
});

roteador.get('/:id', async(req, res)=>{

});

roteador.get('/:id/edit', async(req, res)=>{
});

roteador.post('/login', async (req, res)=>{
    const {nome, senha} = req.body;
    const user = await User.findOne({
        where: {
            nome: nome,
            senha: senha
        }
    });

    req.session.login = false;
    if(user){
        req.session.login = true;
        res.redirect('/pessoas');
    }else{
        res.redirect('/usuarios/login');
    }
});

roteador.post('/novo', async (req, res)=>{
    const {email, senha} = req.body;
    await User.create({email, senha});
    res.redirect('/usuarios/login');
});


roteador.patch('/:id', async(req, res)=>{

});

roteador.delete('/:id', async(req, res)=>{

 
});

module.exports = roteador;