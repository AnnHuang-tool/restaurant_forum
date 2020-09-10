// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     /**
//      * Add altering commands here.
//      *
//      * Example:
//      * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
//      */
//   },

//   down: async (queryInterface, Sequelize) => {
//     /**
//      * Add reverting commands here.
//      *
//      * Example:
//      * await queryInterface.dropTable('users');
//      */
//   }
// };

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'isAdmin', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'isAdmin');
  }
};