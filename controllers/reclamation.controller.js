const { contact, notification } = require("../models");


const createContact = async (req, res, next) => {
  const { name, email, subject, message } = req.body;
  const contenu ='utilisateur envoyer un reclmation' ;
  const type= 'danger';
  try {
    const createContact = await contact.create({
      name,
      email,
      subject,
      message,
    });

    const noty = await notification.create({ 
      contenu,
      type,
    });

     
    res.status(200).json({
        createContact,
    });

    res.status(200).json({
      noty,
  });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }



  
};

const getAllReclamations = async (req, res) => {
    try {
      const reclamations = await contact.findAll();
      if(!reclamations){
          throw new Error("No reclamations found");
      }
      res.status(200).json({
        reclamations,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };

  const deleteReclamatrions = async (req, res) => {
    try {
      const { userId } = req.params;
      const deleted = await contact.destroy({
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

  module.exports = {
  
    getAllReclamations,
    deleteReclamatrions,
    createContact
   
  };
  