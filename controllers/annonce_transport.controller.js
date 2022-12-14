const { where } = require('sequelize');
const {annonce_transport} = require('../models')
const  addTransport = async(req,res)=>{
    const code = Math.round(1000 + Math.random() * 9000);
console.log(code);
    const {Gov_depart,Deleg_depart,description , tel ,Lieu_Exact_depart,Gov_dist,Deleg_dist,Lieu_Exact_dist,nbr_participant,date_depart} = req.body;
    const {user_id}=req.user
    try{
        const createTransport = await annonce_transport.create({
            Gov_depart,description ,code,Deleg_depart, tel,Lieu_Exact_depart,Gov_dist,Deleg_dist,Lieu_Exact_dist,etat:true,nbr_participant,date_depart,user_id
          });
          res.status(201).json({
            createTransport          });
    }catch(err){
        res.status(500).json({
            error: err.message,
          });
    }
} 
const findTransport = async(req,res)=>{
  

    try{
       const {date_depart}= req.body
        const transports = await annonce_transport.findAll({where : {date_depart:date_depart}})
        res.status(200).json({transports})
    }catch(err){
        res.status(500).json({
            error: err.message,
          });
    }
}
    const findTransportByUser = async(req,res)=>{
        try{
           const {user_id}= req.user
            const transport = await annonce_transport.findOne({where : {user_id:user_id , etat : true }})
            res.status(200).json({transport})
        }catch(err){
            res.status(500).json({
                error: err.message,
              });
        }
      
    }
    const annulerTransport = async (req, res) => {
        try {
          const { transport_id } = req.params;
          const deleted = await annonce_transport.destroy({
            where: { id: transport_id },
          });
          if (!deleted) {
            throw new Error("transport not found");
          }
          res.status(204).send("transport deleted");
        } catch (error) {
          res.status(500).json({
            error: error.message,
          });
        }
      };
module.exports ={
    addTransport,findTransport ,findTransportByUser , annulerTransport
}