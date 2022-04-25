module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        poster: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        timestamps: true,
        underscored: true,
        tableName: 'movies',
        schema: 'public'
    });

    //Warning: enabling below line and committing in Github is punishable offence
    //Note: Drop and Recreate Table everytime you start server
    /*Movie.sync({ force: true }, () => {
        console.log("Table is created!");
    })*/

    return Movie;
}