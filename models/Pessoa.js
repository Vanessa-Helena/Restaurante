/*const Pessoa = (sequelize, DataTypes) =>{
    return sequelize.define('Pessoa', {
        nome: DataTypes.STRING,
        registro: DataTypes.INTEGER
    });
}

module.exports = Pessoa;*/

module.exports = (sequelize, DataTypes)=>{
    const Pessoa = sequelize.define('Pessoa', {
        userId: DataTypes.STRING,
        nome: DataTypes.STRING
    }, {});
    Pessoa.associate = function(models){
        Pessoa.belongsTo(models.User, {foreignKey: 'userId'})
    }
    return Pessoa;
}