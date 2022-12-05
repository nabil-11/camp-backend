module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    token: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
