// ORM:
const { DataTypes } = require('sequelize');
const database = require('#services/db.service');

const ShareDetails = database.define(
    'ShareDetails',
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        imgUrl: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        eps: {
            type: DataTypes.INTEGER
        },
        peRation: {
            type: DataTypes.INTEGER
        },
        paidUpCapital: {
            type: DataTypes.STRING
        },
        bookValue: {
            type: DataTypes.INTEGER
        },
        marketCap: {
            type: DataTypes.STRING
        },
        ltd: {
            type: DataTypes.INTEGER
        },
        dividendHistory: {
            type: DataTypes.STRING
        },
    },
    {
        timestamps: true,
    }
);


// Static methods\s
ShareDetails.associate = (models) => {
    models.User.belongsToMany(models.ShareDetails, { through: models.Fav });
};
// Instance methods:

// Instance methods\
module.exports = ShareDetails;