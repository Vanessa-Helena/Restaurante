'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('pessoa', [
      {
          nome: "Vanessa",
          registro: 123
      },
      {
          nome: "Carlos",
          registro: 456
      },
      {
          nome: "Tomoyo",
          registro: 789
      },
      {
          nome: "Shiryu",
          registro: 101
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('pessoa', null, {});

  }
};
