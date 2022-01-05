module.exports = (sequelize, DataTypes) => {
  const Encounter = sequelize.define(
    'encounters',
    {
      pack_code: {
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      difficulty: {
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
      classMethods: {},
    },
  )
  Encounter.associate = models => {
    Encounter.hasMany(models.Fight)
  }
  return Encounter
}
