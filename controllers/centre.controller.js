const { centre } = require("../models");


const createCentre = async (req, res, next) => {
  const { gov, deleg, lieu_exact, nbr } = req.body;

  try {
    const createCentre = await centre.create({
        gov,
        deleg,
        lieu_exact,
        nbr,
    });
 

     
    res.status(200).json({
        createCentre,
    });

   
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
  
};


const getAllCentre = async (req, res) => {
  try {
    const centres = await centre.findAll();
    if(!centres){
        throw new Error("No centres found");
    }
    res.status(200).json({
      centres,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};


const updateCentre = async (req, res) => {
  const { userId } = req.params;
  
 const [updated] = await centre.update(req.body,{
   where: { id: userId  }, 
 });

 if (updated) {
   const datas = await centre.findOne({ where: { id: userId } });
   res.status(200).json({
    centre: datas,
   });
}
}

const deleteCentre = async (req, res) => {
  try {
    const { userId } = req.params;
    const deleted = await centre.destroy({
      where: { id: userId },
    });
    if (!deleted) {
      throw new Error("updatedCentre not found");
    }
    res.status(204).send("Centre deleted");
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};


const countCentres = async (req, res) => {
  try {
 
    const countCentre = await centre.count({});
    res.status(200).json({
      countCentre,
    });
    console.log(countCentre)
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

 

module.exports = {  
  createCentre,
  getAllCentre,
  updateCentre,
  deleteCentre,
  countCentres
};
  