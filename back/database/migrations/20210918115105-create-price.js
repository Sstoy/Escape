module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Prices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ClubId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clubs',
          key: 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      room: {
        type: Sequelize.STRING,
      },
      onehour: {
        type: Sequelize.INTEGER,
      },
      fivehours: {
        type: Sequelize.INTEGER,
      },
      nightweekday: {
        type: Sequelize.INTEGER,
      },
      nightweekend: {
        type: Sequelize.INTEGER,
      },
      morning: {
        type: Sequelize.INTEGER,
      },
      twentyfourhours: {
        type: Sequelize.INTEGER,
      },
      PS: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Prices');
  },
};
