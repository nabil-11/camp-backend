module.exports = (sequelize, Sequelize) => {
    const Commentaire = sequelize.define("commentaire", {
      contenu: {
        type: Sequelize.STRING},
        centreId :{
          type:Sequelize.INTEGER
        },
     
    });
  
    return Commentaire;
  };
  