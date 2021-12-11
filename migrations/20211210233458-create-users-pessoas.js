'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('pessoas', 'userId', {
       type: Sequelize.INTEGER,
       allowNull: false,
       references: {
         model: 'users',
         key: 'id'
       }      
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('pessoas', 'userId');
  }
};
