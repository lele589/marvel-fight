module.exports = (sequelize, DataTypes) => {
  const Aspect = sequelize.define(
    'aspects',
    {
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      color: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      classMethods: {},
    },
  )
  Aspect.associate = models => {
    Aspect.hasMany(models.Fight)
  }
  return Aspect
}
