module.exports = (sequelize, Sequelize) => {
    const Notification = sequelize.define("notification", {
      contenu: {
        type: Sequelize.STRING,
      },
      
      type: {
        type: Sequelize.STRING,
      },

      etat: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },

    });
  
    return Notification;
  };
  