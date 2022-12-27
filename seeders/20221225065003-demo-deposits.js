"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Deposits",
      [
        {
          name: "Fixed Income",
          amount: 10000,
          date: "2023-01-01",
          typeId: 1,
          userId: 1,
        },
        {
          name: "Fixed Income",
          amount: 10000,
          date: "2023-01-02",
          typeId: 1,
          userId: 2,
        },
        {
          name: "Fixed Income",
          amount: 10000,
          date: "2023-01-03",
          typeId: 1,
          userId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Deposits", null, {});
  },
};
