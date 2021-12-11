'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Pessoas', 'userId', {
       type: Sequelize.INTEGER,
       allowNull: false,
       references: {
         model: 'users',
         key: 'id'
       }      
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Pessoas', 'userId');
  }
};
