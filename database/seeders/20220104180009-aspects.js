module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      'aspects',
      [
        {
          type: 'aggression',
          name: 'agresividad',
          color: '#940D14',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'justice',
          name: 'justicia',
          color: '#EBB408',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'protection',
          name: 'protección',
          color: '#4DA01B',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'leadership',
          name: 'liderazgo',
          color: '#239C90',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'basic',
          name: 'básico',
          color: '#7A8C88',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('aspects', [
      { type: 'aggression' },
      { type: 'justice' },
      { type: 'protection' },
      { type: 'leadership' },
      { type: 'basic' },
    ])
  },
}
