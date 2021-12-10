const pessoasController = require('./pessoasController');
const usersController = require('./usersController');

controllers = {
    pessoas: pessoasController,
    users: usersController
}

module.exports = controllers;