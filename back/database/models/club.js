const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Club extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Price, Computer }) {
      Club.hasMany(Price);
      Club.hasMany(Computer);
    }
  }
  Club.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    computers: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Club',
  });
  return Club;
};
