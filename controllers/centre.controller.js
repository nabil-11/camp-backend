const { centre } = require("../models");

const createCentre = async (req, res, next) => {
  const { Gov, Deleg, LieuExact,Langitude,Lantitude } = req.body;
  try {
    const createCentre = await centre.create({
      Gov,
      Deleg,
      LieuExact,
      Langitude,
      Lantitude,

    });
    res.status(201).json({
      createCentre,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const getCentre = async (req, res) => {
  try {
    const { id } = req.params;
    const centreData = await centre.findOne({
      where: { id: id },
    });
    if (!centreData) {
      throw new Error("Centre not found");
    }
    res.status(200).json({
      centreData,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const updateCentre = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await centre.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedCentre = await centre.findOne({ where: { id: id } });
      res.status(200).json({
        centre: updatedCentre,
      });
    }
    throw new Error("Centre not found");
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const deleteCentre= async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await centre.destroy({
      where: { id: id },
    });
    if (!deleted) {
      throw new Error("Centre not found");
    }
    res.status(204).send("Centre deleted");
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
module.exports = {
  createCentre,
  getCentre,
  updateCentre,
  deleteCentre,
};
