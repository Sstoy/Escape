const { prices } = require('../SeedArray');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Prices', prices, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Prices', null, {});
  },
};
