module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('gameMode', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pack_code: {
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      order: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('gameMode')
  },
}
