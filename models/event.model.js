const Media = require('./media.model')

module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
      Gov_depart: {
        type: Sequelize.STRING,
      },
      Deleg_depart: {
        type: Sequelize.STRING,
      },
      Lieu_Exact_depart: {
        type: Sequelize.STRING,
      },
      Gov_dist: {
        type: Sequelize.STRING,
      },
      Deleg_dist: {
        type: Sequelize.STRING,
      },  
       Lieu_Exact_dist: {
        type: Sequelize.STRING,
      },
      etat: {
        type: Sequelize.BOOLEAN,
      },
      nbr: {
        type: Sequelize.INTEGER,
      }, 
       date_depart: {
        type:  Sequelize.DATE    ,
      },
      user_id :{
        type: Sequelize.INTEGER ,
        allowNull : false
      }
    });
  

    return Event;
  };
  