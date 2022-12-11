module.exports = (sequelize, Sequelize) => {
    const annonce_transport = sequelize.define("annonce_transport" ,{
        
            code : {
                type:Sequelize.INTEGER },
                Gov_depart: {
                    type: Sequelize.STRING,
                  },
                  Deleg_depart: {
                    type: Sequelize.STRING,
                  },
                  code:{
                    type:Sequelize.INTEGER
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
                  description: {
                    type: Sequelize.STRING,
                  },
                  tel: {
                    type: Sequelize.STRING,
                  },
                  date_depart :{
                    type: Sequelize.DATE,
                  },
                  nbr_participant :{
                    type: Sequelize.INTEGER
                  },
                  etat :{
                    type:Sequelize.BOOLEAN
                  }

        

    } )
    return annonce_transport;
}