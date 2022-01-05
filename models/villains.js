module.exports = (sequelize, DataTypes) => {
  const Villain = sequelize.define(
    'villains',
    {
      pack_code: {
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      thumb: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      classMethods: {},
    },
  )
  Villain.associate = models => {
    Villain.hasMany(models.Fight)
  }
  return Villain
}
