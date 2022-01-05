module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fighting', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      hero_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'heroes',
          key: 'id',
        },
      },
      aspect_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'aspects',
          key: 'id',
        },
      },
      villain_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'villains',
          key: 'id',
        },
      },
      encounter_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'encounters',
          key: 'id',
        },
      },
      gameMode_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'gameMode',
          key: 'id',
        },
      },
      deck_url: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      is_win: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      is_campaign: {
        type: Sequelize.BOOLEAN,
      },
      is_multiplayer: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('fighting')
  },
}
