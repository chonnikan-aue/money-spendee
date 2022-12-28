"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DepositType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DepositType.hasMany(models.Deposit, { foreignKey: "typeId" });
      DepositType.hasMany(models.Withdraw, { foreignKey: "withdrawFromId" });
      DepositType.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  DepositType.init(
    {
      name: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      budgetPercent: DataTypes.FLOAT,
      alertPercent: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "DepositType",
    }
  );
  return DepositType;
};
