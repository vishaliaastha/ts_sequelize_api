const {Sequelize ,DataTypes , literal}  = require('sequelize');


const sequelize = new Sequelize('crudapidb', 'postgres', 'restApi', {
  host: 'localhost',
  dialect: 'postgres' 
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const db:any = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize

db.users = require('../models/userModel')(sequelize,DataTypes,literal)
db.contact_details = require('../models/contactDetailsModel')(sequelize,DataTypes,literal)
db.contact_id = require('../models/contactIds')(sequelize,DataTypes,db.users,db.contact_details)
db.family_detail = require('../models/familyDetailModel')(sequelize,DataTypes,literal,db.users,db.contact_details)
// db.users.hasOne(db.contact_details, { foreignKey : "user_Id"});
// db.contact_details.belongsTo(db.users)


// db.users.hasMany(db.contact_details, { foreignKey : "user_Id"});
// db.contact_details.belongsTo(db.users)

db.users.belongsToMany(db.contact_details, { through: db.contact_id } );
db.contact_details.belongsToMany(db.users, { through: db.contact_id } ) ;

db.users.hasOne(db.contact_details)
db.users.hasMany(db.family_detail)

db.users.hasOne(db.contact_details)
db.users.hasMany(db.family_detail)
db.family_detail.hasMany(db.contact_details)

db.sequelize.sync({force : false})
.then(()=>{
  console.log("YEs sync SucessFully")
})
export default db