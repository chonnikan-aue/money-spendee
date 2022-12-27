'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DepositTypeUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DepositTypeUser.init({
    typeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    budgetPercent: DataTypes.FLOAT,
    alertPercent: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'DepositTypeUser',
  });
  return DepositTypeUser;
};