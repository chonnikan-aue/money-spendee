"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class WithdrawType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      WithdrawType.hasMany(models.Withdraw, { foreignKey: "typeId" });
      WithdrawType.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  WithdrawType.init(
    {
      name: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      budgetPercent: DataTypes.FLOAT,
      alertPercent: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "WithdrawType",
    }
  );
  return WithdrawType;
};
