"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "DepositTypeUsers",
      [
        {
          typeId: 1,
          userId: 1,
          budgetPercent: 50,
          alertPercent: 90,
        },
        {
          typeId: 1,
          userId: 2,
          budgetPercent: 50,
          alertPercent: 90,
        },
        {
          typeId: 1,
          userId: 3,
          budgetPercent: 50,
          alertPercent: 90,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("DepositTypeUsers", null, {});
  },
};
