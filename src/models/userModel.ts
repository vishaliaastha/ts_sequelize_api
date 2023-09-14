// import { DataTypes, literal } from "sequelize";
// import sequelize from '../util/database'
module.exports = (sequelize:any ,DataTypes:any , literal:any ) => {
    const User = sequelize.define("User" , {
        id: {
            type: DataTypes.UUID,
            defaultValue: literal('gen_random_uuid()'),
            primaryKey: true,
        },
        username : {
            type : DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email :{
            type : DataTypes.STRING,
            allowNull: false
        },
        password : {
            type : DataTypes.STRING,
            allowNull: false
        } 
    },{
        tableName: 'users'
    });
    return User;
}
// console.log(User === sequelize.models.User); 
// export default User
