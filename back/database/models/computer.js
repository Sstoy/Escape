const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Computer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Club }) {
      Computer.belongsTo(Club);
    }
  }
  Computer.init({
    ClubId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Clubs',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    },
    room: {
      type: DataTypes.STRING,
    },
    graphics: {
      type: DataTypes.STRING,
    },
    cpu: {
      type: DataTypes.STRING,
    },
    monitor: {
      type: DataTypes.STRING,
    },
    ram: {
      type: DataTypes.STRING,
    },
    keyboard: {
      type: DataTypes.STRING,
    },
    mouse: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Computer',
  });
  return Computer;
};
