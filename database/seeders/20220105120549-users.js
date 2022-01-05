module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Elena',
          email: 'elenacfnb@gmail.com',
          password: '$2a$10$4LOQhv6AsybHtW6HMavQxeUDRxmhfC1Fcb2MFq0II4x6hhQkI3.0K',
          role: 'admin',
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
