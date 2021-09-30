module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Computers', {
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
      graphics: {
        type: Sequelize.STRING,
      },
      cpu: {
        type: Sequelize.STRING,
      },
      monitor: {
        type: Sequelize.STRING,
      },
      ram: {
        type: Sequelize.STRING,
      },
      keyboard: {
        type: Sequelize.STRING,
      },
      mouse: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Computers');
  },
};
