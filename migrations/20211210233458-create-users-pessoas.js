'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'userId', {
       type: Sequelize.INTEGER,
       allowNull: false,
       references: {
         model: 'Pessoas',
         key: 'id'
       }      
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'userId');
  }
};
