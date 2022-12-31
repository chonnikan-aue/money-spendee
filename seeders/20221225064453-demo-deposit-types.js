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
        },
        {
          name: "Checkings",
          userId: 2,
        },
        {
          name: "Checkings",
          userId: 3,
        },
        {
          name: "Savings",
          userId: 1,
        },
        {
          name: "Savings",
          userId: 2,
        },
        {
          name: "Savings",
          userId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("DepositTypes", null, {});
  },
};
