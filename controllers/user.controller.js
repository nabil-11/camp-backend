const { user } = require("../models");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");

const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const createdUser = await user.create({
      name,
      email,
      password,
    });
    console.log(email)
    res.status(201).json({
      createdUser,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const userData = await user.findOne({
      where: { id: userId },
    });
    if (!userData) {
      throw new Error("User not found");
    }
    res.status(200).json({
      userData,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const [updated] = await user.update(req.body, {
      where: { id: userId },
    });
    if (updated) {
      const updatedUser = await user.findOne({ where: { id: userId } });
      res.status(200).json({
        user: updatedUser,
      });
    }
    throw new Error("User not found");
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const deleted = await user.destroy({
      where: { id: userId },
    });
    if (!deleted) {
      throw new Error("User not found");
    }
    res.status(204).send("User deleted");
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await user.findAll();
    if(!users){
        throw new Error("No users found");
    }
    res.status(200).json({
      users,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const registrer = async (req, res) => {

  // Our register logic starts here
  try {
    // Get user input
    const { name, email, password } = req.body;

    // Validate user input
    if (!(email && password && name)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await user.findOne({ where: { email: email }});
    console.log(oldUser)
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const User = await user.create({
     name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    User.token = token;

    // return new user
    res.status(201).json(User);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
}
const login = async (req, res) => {

  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;
    console.log(email,password)

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const User = await user.findOne({where:{email:email}});
    if (User && (await bcrypt.compare(password, User.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: User._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      User.token = token;

      // user
      res.status(200).json(User);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
}
module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
  registrer ,
  login
};
