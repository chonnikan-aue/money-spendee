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
      WithdrawType.belongsToMany(models.User, {
        foreignKey: "typeId",
        otherKey: "userId",
        through: "WithdrawTypeUser",
      });
    }
  }
  WithdrawType.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "WithdrawType",
    }
  );
  return WithdrawType;
};
