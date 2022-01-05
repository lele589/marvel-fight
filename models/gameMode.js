module.exports = (sequelize, DataTypes) => {
  const GameMode = sequelize.define(
    'gameMode',
    {
      pack_code: {
        type: DataTypes.STRING,
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      order: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
      classMethods: {},
    },
  )
  GameMode.associate = models => {
    GameMode.hasMany(models.Fight)
  }
  return GameMode
}
