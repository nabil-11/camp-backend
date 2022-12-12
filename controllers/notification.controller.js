const { notification } = require("../models");




const getAllnotifications = async (req, res) => {
 
      const notifications = await notification.findAll();
      if(!notifications){
          throw new Error("No notifications found");
      }
      res.status(200).json({
        notifications,
      });
   
  };

  

  module.exports = {
  
    getAllnotifications
   
  };
  