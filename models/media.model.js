const event = require("./event.model");

module.exports = (sequelize, Sequelize) => {
    const Media = sequelize.define("media", {
      titre: {
        type: Sequelize.STRING,
      },
      type :{
        type:Sequelize.STRING
      },
      url : {
        type: Sequelize.STRING,
      },
      Gov: {
        type: Sequelize.STRING,
      },
      Deleg: {
        type: Sequelize.STRING,
      },
      Lieu: {
        type: Sequelize.STRING,
      },
      event_id : {
        type: Sequelize.INTEGER,
      },

    });
    return Media;
  };
  