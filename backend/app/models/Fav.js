// ORM:
const { DataTypes } = require('sequelize');
const database = require('#services/db.service');


const Fav = database.define(
    'Fav',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    },
    {
        // Enable automatic 'createdAt' and 'updatedAt' fields.
        timestamps: true,
    }
);

// Static methods:
Fav.associate = (models) => {
    models.ShareDetails.belongsToMany(models.User, { through: models.Fav });
    models.User.belongsToMany(models.ShareDetails, { through: models.Fav });
    models.Fav.belongsTo(models.ShareDetails);
};



module.exports = Fav;
