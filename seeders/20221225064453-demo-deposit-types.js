"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "DepositTypes",
      [
        {
          name: "Checkings",
          userId: 1,
          budgetPercent: 60,
          alertPercent: 90,
        },
        {
          name: "Checkings",
          userId: 2,
          budgetPercent: 60,
          alertPercent: 90,
        },
        {
          name: "Checkings",
          userId: 3,
          budgetPercent: 60,
          alertPercent: 90,
        },
        {
          name: "Savings",
          userId: 1,
          budgetPercent: 40,
          alertPercent: 90,
        },
        {
          name: "Savings",
          userId: 2,
          budgetPercent: 40,
          alertPercent: 90,
        },
        {
          name: "Savings",
          userId: 3,
          budgetPercent: 40,
          alertPercent: 90,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("DepositTypes", null, {});
  },
};
