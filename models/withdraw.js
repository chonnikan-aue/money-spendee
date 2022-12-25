"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Withdraw extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Withdraw.belongsTo(models.WithdrawType, { foreignKey: "typeId" });
      Withdraw.belongsTo(models.DepositType, { foreignKey: "withdrawFromId" });
      Withdraw.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Withdraw.init(
    {
      name: DataTypes.STRING,
      amount: DataTypes.FLOAT,
      date: DataTypes.DATEONLY,
      typeId: DataTypes.INTEGER,
      withdrawFromId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Withdraw",
    }
  );
  return Withdraw;
};
