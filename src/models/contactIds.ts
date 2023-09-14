module.exports = (sequelize: any , DataTypes:any,User:any ,Contact : any) => {
    const UserContact = sequelize.define('UserContact', {
       
      },
      {
        tableName : 'contact_id'
    });
     return UserContact;
}

  