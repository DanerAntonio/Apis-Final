module.exports = (sequelize, DataTypes) => {
    const Rol = sequelize.define("Rol", {
      IdRol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      NombreRol: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      Estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    });
  
    return Rol;
  };