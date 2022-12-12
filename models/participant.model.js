module.exports = (sequelize, Sequelize) => {
    const Participant = sequelize.define("participant", {
   tel :{
    type: Sequelize.STRING
   },
   nom_virtuel :{
    type: Sequelize.STRING
   },
   heure :{
    type :Sequelize.TIME
   },
   user_id : {
    type :Sequelize.INTEGER
   },
   event_id:{
    type:Sequelize.INTEGER
   }
    })
    return Participant
}