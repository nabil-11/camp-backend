const { contact } = require("../models");


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
    deleteReclamatrions
   
  };
  