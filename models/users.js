module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'users',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(150),
      },
      role: {
        allowNull: false,
        type: DataTypes.ENUM('admin', 'user'),
      },
    },
    {
      freezeTableName: true,
      classMethods: {},
    },
  )
  User.associate = models => {
    User.hasMany(models.Fight) /* , { onDelete: 'cascade' } ) */
  }
  return User
}
