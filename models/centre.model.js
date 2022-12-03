module.exports = (sequelize, Sequelize) => {
    const Centre = sequelize.define("centre", {
      Gov: {
        type: Sequelize.STRING,
      },
      Deleg: {
        type: Sequelize.STRING,
      },
      LieuExact: {
        type: Sequelize.STRING,
      },
      Langitude: {
        type: Sequelize.STRING,
      },
      lantitude: {
        type: Sequelize.STRING,
      },
    });
  
    return Centre;
  };
  