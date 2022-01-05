module.exports = (sequelize, DataTypes) => {
  const Hero = sequelize.define(
    'heroes',
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
  Hero.associate = models => {
    Hero.hasMany(models.Fight)
  }
  return Hero
}
