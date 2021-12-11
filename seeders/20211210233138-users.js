'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
          email: 'vanessa@helena',
          senha: '123'
      },
      {
          email: 'carlos@moyses',
          senha: '1234'
      },
      {
          email: 'tomoyo@filha',
          senha: '12345'
      },
      {
          email: 'shiryu@filho',
          senha: '123456'
      }
    ], {});
 
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('users', null, {});

  }
};
