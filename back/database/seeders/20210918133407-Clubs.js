const { clubs, computers } = require('../SeedArray');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Clubs', clubs, {});
    await queryInterface.bulkInsert('Computers', computers, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Computers', null, {});
    await queryInterface.bulkDelete('Clubs', null, {});
  },
};
