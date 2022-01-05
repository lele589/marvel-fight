module.exports = (sequelize, DataTypes) => {
  const Pack = sequelize.define(
    'packs',
    {
      code: {
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
    },
    {
      freezeTableName: true,
      classMethods: {},
    },
  )
  /* User.associate = function (models) {
   // associations can be defined here
   } */
  return Pack
}
