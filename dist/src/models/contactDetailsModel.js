"use strict";
module.exports = (sequelize, DataTypes, literal) => {
    const ContactDetail = sequelize.define("UserDetail", {
        id: {
            type: DataTypes.UUID,
            defaultValue: literal('gen_random_uuid()'),
            primaryKey: true
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        pinCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_Id: DataTypes.UUID
    }, {
        tableName: 'contact_details'
    });
    return ContactDetail;
};
//# sourceMappingURL=contactDetailsModel.js.map