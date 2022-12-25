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
      DepositType.belongsToMany(models.User, {
        foreignKey: "typeId",
        otherKey: "userId",
        through: "DepositTypeUser",
      });
    }
  }
  DepositType.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DepositType",
    }
  );
  return DepositType;
};
