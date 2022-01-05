module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('packs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      code: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.ENUM('campaign', 'hero', 'scenario'),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async queryInterface => {
    await queryInterface.dropTable('packs')
  },
}
