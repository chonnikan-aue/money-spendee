"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DepositTypes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      budgetPercent: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      alertPercent: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    },
    {
      uniqueKeys: {
        actions_unique: {
          fields: ["name", "userId"],
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("DepositTypes");
  },
};
