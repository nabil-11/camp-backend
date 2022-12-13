
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
 
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.event = require("./event.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.centre = require("./centre.model.js")(sequelize, Sequelize);
db.commentaire = require("./commentaire.model.js")(sequelize, Sequelize);
db.media = require("./media.model.js")(sequelize,Sequelize)
db.annonce_transport = require('./annonce_transport.model.js')(sequelize, Sequelize);
db.event.hasMany(db.media , {
  foreignKey:{ name:'event_id' ,allowNull:false},
  as: 'eventMedia'
} )
db.user.hasMany(db.annonce_transport ,{
  foreignKey:{ name:'user_id',allowNull:false},
  as:'userTransport'
})
db.media.belongsTo(db.event, {
  foreignKey: {name:'event_id',allowNull:false},
  as: 'mediaEvent'
})
db.contact = require("./contact.model")(sequelize, Sequelize);
db.notification = require("./notification.model")(sequelize, Sequelize);
db.centre = require("./centre.model")(sequelize, Sequelize);
db.participant = require("./participant.model")(sequelize,Sequelize)
 db.annonce_transport.hasMany(db.participant , {
  foreignKey: {name:'event_id',allowNull:false},
  as : 'participant_event'
 })
db.event.belongsTo(db.user, {
  foreignKey: { name:'user_id',  allowNull: false },
  as: 'userEvent'
})
db.user.hasMany(db.event , {
  foreignKey: {name:'user_id',allowNull:false},
  as: 'EventUser'
} )


module.exports = db;