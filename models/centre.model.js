module.exports = (sequelize, Sequelize) => {
    const Centre = sequelize.define("centre", {
      gov: {
        type: Sequelize.STRING,
      },
      deleg: {
        type: Sequelize.STRING,
      },
      lieu_exact: {
        type: Sequelize.STRING,
      },
      nbr: {
        type: Sequelize.STRING,
      },
      
    });
    
    return Centre;
  };
  