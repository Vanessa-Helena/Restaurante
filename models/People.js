const People = (sequelize, DataTypes) =>{
    return sequelize.define('People', {
        nome: DataTypes.STRING,
        registro: DataTypes.INTEGER
    });
}

module.exports = People;