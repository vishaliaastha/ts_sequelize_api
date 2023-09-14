"use strict";
module.exports = (sequelize, DataTypes, User, Contact) => {
    const UserContact = sequelize.define('UserContact', {}, {
        tableName: 'contact_id'
    });
    return UserContact;
};
//# sourceMappingURL=contactIds.js.map