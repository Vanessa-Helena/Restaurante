const Pessoa = (sequelize, DataTypes) =>{
    return sequelize.define('Pessoa', {
        nome: DataTypes.STRING,
        registro: DataTypes.INTEGER
    });
}

module.exports = Pessoa;