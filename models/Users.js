const User = (sequelize, DataTypes) =>{
    return sequelize.define('User', {
        email: DataTypes.STRING,
        senha: DataTypes.STRING
    });
}

module.exports = User;