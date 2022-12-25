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
      User.belongsToMany(models.DepositType, {
        foreignKey: "userId",
        otherKey: "typeId",
        through: "DepositTypeUser",
      });
      User.belongsToMany(models.WithdrawType, {
        foreignKey: "userId",
        otherKey: "typeId",
        through: "WithdrawTypeUser",
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
