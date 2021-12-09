'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('pessoas', { 
      id: {
        type: Sequelize.INTEGER,
        primarykey: true,
        //autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      registro: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pessoas');
  },
};
