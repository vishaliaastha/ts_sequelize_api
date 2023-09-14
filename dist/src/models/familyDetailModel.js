"use strict";
module.exports = (sequelize, DataTypes, literal, UserModel, AddressModel) => {
    const FamilyDetailModel = sequelize.define("FamilyDetail", {
        id: {
            type: DataTypes.UUID,
            defaultValue: literal('gen_random_uuid()'),
            primaryKey: true
        },
        headOfFamily: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nationality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        caste: {
            type: DataTypes.STRING,
            allowNull: false
        },
        UserId: {
            type: DataTypes.UUID,
            references: {
                model: UserModel,
                key: 'id'
            }
        },
        AddressId: {
            type: DataTypes.UUID,
            references: {
                model: AddressModel,
                key: 'id'
            }
        }
    }, {
        tableName: "family_detail"
    });
    return FamilyDetailModel;
};
//# sourceMappingURL=familyDetailModel.js.map