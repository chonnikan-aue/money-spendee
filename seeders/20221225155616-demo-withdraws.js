"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Withdraws",
      [
        {
          name: "Breakfast",
          amount: 100,
          date: "2023-01-01",
          typeId: 1,
          withdrawFromId: 1,
          userId: 1,
        },
        {
          name: "Lunch",
          amount: 200,
          date: "2023-01-02",
          typeId: 2,
          withdrawFromId: 2,
          userId: 2,
        },
        {
          name: "Dinner",
          amount: 300,
          date: "2023-01-03",
          typeId: 3,
          withdrawFromId: 3,
          userId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Withdraws", null, {});
  },
};
