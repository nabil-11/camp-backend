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


  const deleteNoty = async (req, res) => {

    try {
      const deleted = await notification.destroy({
        where: {},
        truncate: true
      });
     

      res.status(204).send("Notification deleted");
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }

  };

  

  module.exports = {
  
    getAllnotifications,
    deleteNoty
   
  };
  