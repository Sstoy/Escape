const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Club }) {
      Price.belongsTo(Club, { onDelete: 'cascade', onUpdate: 'cascade' });
    }
  }
  Price.init({
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
    onehour: {
      type: DataTypes.INTEGER,
    },
    fivehours: {
      type: DataTypes.INTEGER,
    },
    nightweekday: {
      type: DataTypes.INTEGER,
    },
    nightweekend: {
      type: DataTypes.INTEGER,
    },
    morning: {
      type: DataTypes.INTEGER,
    },
    twentyfourhours: {
      type: DataTypes.INTEGER,
    },
    PS: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Price',
  });
  return Price;
};
