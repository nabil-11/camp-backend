module.exports = (sequelize, Sequelize) => {
    const Transport = sequelize.define("transport", {
      
      code: {
        type: Sequelize.STRING,
      },
      Gov_depart: {
        type: Sequelize.STRING,
      },
      Lieu_depart_exact: {
        type: Sequelize.STRING,
      },
      Gov_dist: {
        type: Sequelize.STRING,
        }, 
      Deleg_depart: {
          type: Sequelize.STRING,
      },
      Deleg_dist:{
            type: Sequelize.STRING,
        }, 
        date_depart: {
        type: Sequelize.STRING,
      },
      nbr_participant: {
        type: Sequelize.STRING,
      },
      Lieu_exact: { 
        type: Sequelize.STRING,
      },
      etat: {
        type: Sequelize.STRING,
      },
    });
  
    return Transport;
  };
  