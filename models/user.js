"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Deposit, { foreignKey: "userId" });
      User.hasMany(models.Withdraw, { foreignKey: "userId" });
      User.hasMany(models.DepositType, { foreignKey: "userId" });
      User.hasMany(models.WithdrawType, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      fixedIncome: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
