'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
          email: 'Todd',
          senha: 'abcd'
      },
      {
          email: 'Skyler',
          senha: 'abcd'
      },
      {
          email: 'Sk8erBoi',
          senha: 'abcd'
      },
      {
          email: 'onlysayswoof',
          senha: 'abcd'
      }
    ], {});
 
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('users', null, {});

  }
};
