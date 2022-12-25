"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "WithdrawTypes",
      [
        {
          name: "Daily Expenses",
        },
        {
          name: "Investment",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("WithdrawTypes", null, {});
  },
};
