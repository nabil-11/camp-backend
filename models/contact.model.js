module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      subject: {
        type: Sequelize.STRING,
      },
      message: {
        type: Sequelize.STRING,
      },
      etat: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    });
  
    return Contact;
  };
  