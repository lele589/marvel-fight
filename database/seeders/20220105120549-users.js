module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Elena',
          email: 'elenacfnb@gmail.com',
          password: '123456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('users', [{ email: 'elenacfnb@gmail.com' }])
  },
}
