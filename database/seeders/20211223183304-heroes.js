module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      'heroes',
      [
        {
          pack_code: 'MC01',
          name: 'Spiderman',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC01',
          name: 'Capitana Marvel',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC01',
          name: 'Hulka',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC01',
          name: 'Pantera negra',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC01',
          name: 'Ironman',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC04',
          name: 'Capitán América',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC05',
          name: 'Ms. Marvel',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC06',
          name: 'Thor',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC07',
          name: 'Viuda Negra',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC08',
          name: 'Doctor Extraño',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC09',
          name: 'Hulk',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC10',
          name: 'Ojo de Halcón',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC10',
          name: 'Spiderwoman',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC12',
          name: 'Hombre Hormiga',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC13',
          name: 'Avispa',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC14',
          name: 'Quicksilver',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC15',
          name: 'Bruja Escarlata',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC16',
          name: 'Mapache Cohete',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC16',
          name: 'Groot',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC17',
          name: 'Star-Lord',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC18',
          name: 'Gamora',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC19',
          name: 'Drax',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC20',
          name: 'Veneno',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC21',
          name: 'Spectrum',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC21',
          name: 'Adam Warlock',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC22',
          name: 'Nebula',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC23',
          name: 'Máquina de Guerra',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC24',
          name: 'Valkyrie',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pack_code: 'MC25',
          name: 'Visión',
          thumb: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('heroes', [
      { name: 'Spiderman' },
      { name: 'Capitana Marvel' },
      { name: 'Hulka' },
      { name: 'Pantera negra' },
      { name: 'Ironman' },
      { name: 'Capitán América' },
      { name: 'Ms. Marvel' },
      { name: 'Thor' },
      { name: 'Viuda Negra' },
      { name: 'Doctor Extraño' },
      { name: 'Hulk' },
      { name: 'Ojo de Halcón' },
      { name: 'Spiderwoman' },
      { name: 'Hombre Hormiga' },
      { name: 'Avispa' },
      { name: 'Quicksilver' },
      { name: 'Bruja Escarlata' },
      { name: 'Mapache Cohete' },
      { name: 'Groot' },
      { name: 'Star-Lord' },
      { name: 'Gamora' },
      { name: 'Drax' },
      { name: 'Veneno' },
      { name: 'Spectrum' },
      { name: 'Adam Warlock' },
      { name: 'Nebula' },
      { name: 'Máquina de Guerra' },
      { name: 'Valkyrie' },
      { name: 'Visión' },
    ])
  },
}
