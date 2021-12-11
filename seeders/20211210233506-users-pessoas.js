/*'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
          userId: 1,
          nome: 'Vanessa'
      },
      {
          userId: 2,
          nome: 'Carlos'
      },
      {
          userId: 3,
          nome: 'Tomoyo'
      },
      {
          userId: 4,
          nome: 'Shiryu'
      }
    ], {});
 
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('users', null, {});

  }
};*/
