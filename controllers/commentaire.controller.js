const { commentaire } = require("../models");

const createCommentaire = async (req, res, next) => {
  const  {contenu,centreId}=req.body
  try {
    const createCommentaire = await commentaire.create({
    contenu,
    centreId,
    });
    res.status(201).json({
      createCommentaire,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const getCommentaire = async (req, res) => {
  try {
    const { id } = req.params;
    const commentaireData = await commentaire.findOne({
      where: { id: id },
    });
    if (!commentaireData) {
      throw new Error("Commentaire not found");
    }
    res.status(200).json({
      commentaireData,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const updateCommentaire = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await commentaire.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedcommentaire = await commentaire.findOne({ where: { id: id } });
      res.status(200).json({
        commentaire: updatedcommentaire,
      });
    }
    throw new Error("Commentaire not found");
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const deleteCommentaire= async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await commentaire.destroy({
      where: { id: id },
    });
    if (!deleted) {
      throw new Error("Commentaire not found");
    }
    res.status(204).send( "Commentaire deleted");
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
module.exports = {
  createCommentaire,
  getCommentaire,
  updateCommentaire,
  deleteCommentaire,
};
