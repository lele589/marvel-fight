module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      'fighting',
      [
        {
          user_id: 1,
          hero_id: 3,
          aspect_id: 2,
          villain_id: 2,
          encounter_id: 2,
          gameMode_id: 1,
          deck_url: 'https://es.marvelcdb.com/deck/view/239528',
          date: new Date(),
          is_win: false,
          is_campaign: false,
          is_multiplayer: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          hero_id: 2,
          aspect_id: 2,
          villain_id: 2,
          encounter_id: 7,
          gameMode_id: 3,
          deck_url: 'https://es.marvelcdb.com/deck/view/239528',
          date: new Date(),
          is_win: true,
          is_campaign: true,
          is_multiplayer: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('fighting', [
      { user_id: 1, hero_id: 3, aspect_id: 2, villain_id: 2, encounter_id: 2, gameMode_id: 1 },
      { user_id: 1, hero_id: 2, aspect_id: 2, villain_id: 2, encounter_id: 7, gameMode_id: 3 },
    ])
  },
}
