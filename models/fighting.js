module.exports = (sequelize, DataTypes) => {
  const Fight = sequelize.define(
    'fighting',
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      villain_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      encounter_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      gameMode_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      deck_url: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
      },
      is_win: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      is_campaign: {
        type: DataTypes.BOOLEAN,
      },
      is_multiplayer: {
        type: DataTypes.BOOLEAN,
      },
    },
    {},
  )
  Fight.associate = models => {
    Fight.belongsTo(models.Hero, { foreignKey: 'hero_id' })
    Fight.belongsTo(models.Villain, { foreignKey: 'villain_id' })
    Fight.belongsTo(models.Encounter, { foreignKey: 'encounter_id' })
    Fight.belongsTo(models.Aspect, { foreignKey: 'aspect_id' })
    Fight.belongsTo(models.GameMode, { foreignKey: 'gameMode_id' })
    Fight.belongsTo(models.User, { foreignKey: 'user_id' })
  }
  return Fight
}
