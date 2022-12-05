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

    });
    return Media;
  };
  