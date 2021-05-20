'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PlayTimes', [
      {
        name: 'morning',
        emoji: '1️⃣',
        timeStart: '08:00:00',
        timeEnd: '11:59:59',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'afternoon',
        emoji: '2️⃣',
        timeStart: '12:00:00',
        timeEnd: '17:59:59',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'evening',
        emoji: '3️⃣',
        timeStart: '18:00:00',
        timeEnd: '23:59:59',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'night',
        emoji: '4️⃣',
        timeStart: '00:00:00',
        timeEnd: '07:59:59',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PlayTimes', null, {});
  },
};