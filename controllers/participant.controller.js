const {participant,event,annonce_transport}= require('../models')



const acceptParticipant = async(req,res)=>{
  const {code,transport_id,user_id,event_id ,tel,heure,nom_virtuel} = req.body
  const transport =  await  annonce_transport.findByPk(transport_id)
  console.log(transport)
  try{
    if(transport.code !== code )return res.status(500).json({error:"code est incorrect"})
     else{ 
    const p = await participant.create({
        heure  , tel , user_id, event_id ,nom_virtuel
    })
    return  res.status(200).json({participant})
     }

  }catch(err){
    console.log(err)
  }
}
module.exports ={
    acceptParticipant
}