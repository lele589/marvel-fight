module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      'gameMode',
      [
        {
          pack_code: 'MC01',
          type: 'normal',
          name: 'Normal',
          order: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC01',
          type: 'normal',
          name: 'Normal II',
          order: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC24',
          type: 'expert',
          name: 'Experto',
          order: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC24',
          type: 'expert',
          name: 'Experto II',
          order: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('gameMode', [
      { name: 'Normal' },
      { name: 'Normal II' },
      { name: 'Experto' },
      { name: 'Experto II' },
    ])
  },
}
