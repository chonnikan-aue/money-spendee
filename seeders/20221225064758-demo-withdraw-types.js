"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "WithdrawTypes",
      [
        {
          name: "Daily Expenses",
          userId: 1,
          budgetPercent: 40,
          alertPercent: 90,
        },
        {
          name: "Daily Expenses",
          userId: 2,
          budgetPercent: 40,
          alertPercent: 90,
        },
        {
          name: "Daily Expenses",
          userId: 3,
          budgetPercent: 40,
          alertPercent: 90,
        },
        {
          name: "Investment",
          userId: 1,
          budgetPercent: 20,
          alertPercent: 90,
        },
        {
          name: "Investment",
          userId: 2,
          budgetPercent: 20,
          alertPercent: 90,
        },
        {
          name: "Investment",
          userId: 3,
          budgetPercent: 20,
          alertPercent: 90,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("WithdrawTypes", null, {});
  },
};
