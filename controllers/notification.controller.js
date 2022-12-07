const { notification } = require("../models");




const getAllnotifications = async (req, res) => {
    try {
      const notifications = await notification.findAll();
      if(!notifications){
          throw new Error("No notifications found");
      }
      res.status(200).json({
        notifications,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };

  

  module.exports = {
  
    getAllnotifications
   
  };
  