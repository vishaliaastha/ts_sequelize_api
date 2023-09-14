"use strict";
module.exports = (sequelize, DataTypes, UserDetail) => {
    const employModel = sequelize.define("EmployeeModel", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        designation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contactDetaitId: {
            type: DataTypes.UUID,
            references: {
                model: UserDetail,
                key: 'id'
            }
        }
    }, {
        tableName: "employees"
    });
    return employModel;
};
//# sourceMappingURL=employModel.js.map