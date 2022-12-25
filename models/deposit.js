"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Deposit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Deposit.belongsTo(models.DepositType, { foreignKey: "typeId" });
      Deposit.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Deposit.init(
    {
      name: DataTypes.STRING,
      amount: DataTypes.FLOAT,
      date: DataTypes.DATEONLY,
      typeId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Deposit",
    }
  );
  return Deposit;
};
