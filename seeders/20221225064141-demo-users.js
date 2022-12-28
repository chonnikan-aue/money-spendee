"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Mai",
          // password is 1234
          password: "$2a$10$DR6jl3ZYqNbxmrDCPVveGe6rT1NS5xsZ0HJk9OAVJJdGep4egHdpG",
        },
        {
          username: "O",
          // password is 1234
          password: "$2a$10$ci4H859Vcq7VpvKQ9d79xeEqLyK6PYxtUrE9UlM/aNdqLuR7u8YHC",
        },
        {
          username: "Non",
          // password is 1234
          password: "$2a$10$BPcjl2cLXFwT25H7T/gx/Oid0rRkCP2AK1KshUd8gcV7dWMMVW1wa",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
