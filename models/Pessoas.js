const Pessoas = (sequelize, DataTypes) =>{
    return sequelize.define('Pessoas', {
        nome: DataTypes.STRING,
        registro: DataTypes.INTEGER
    });
}

module.exports = Pessoas;