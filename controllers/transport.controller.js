const { transport } = require("../models");

const createTransport = async (req, res, next) => {
  const { code, Gov_depart , Lieu_depart_exact,  Gov_dist,Deleg_depart, Deleg_dist ,date_depart,nbr_participant,Lieu_exact,etat} = req.body;
  try {
    const createTransport = await transport.create({
      
      code,
      Gov_depart,
      Lieu_depart_exact,
      Gov_dist,
      Deleg_depart,
      Deleg_dist, 
      date_depart,
      nbr_participant,
      Lieu_exact,
      etat,

    });

    res.status(201).json({
      createTransport,
    });
    
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};


const getAllTransports = async (req, res) => {
  try {
    const trans = await transport.findAll();
    if(!trans){
        throw new Error("No trans found");
    }
    res.status(200).json({
      trans,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const deleteTransport = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await transport.destroy({
      where: { id: id },
    });
    if (!deleted) {
      throw new Error("Transport not found");
    }
    res.status(204).send("Transport deleted");
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  createTransport,
  getAllTransports,
  deleteTransport,
 
};
