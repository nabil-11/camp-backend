const {participant,event,annonce_transport}= require('../models')



const acceptParticipant = async(req,res)=>{
    console.log(req.body)
  const {code ,tel,heure,nom_virtuel} = req.body.form
  const{transport_id,user_id,event_id}= req.body
  const transport =  await  annonce_transport.findByPk(transport_id)
  console.log(transport)
  try{
    if(transport.code !== code )return res.status(500).json({error:"code est incorrect"})
     else{ 
    const p = await participant.create({
        heure  , tel , user_id, event_id ,nom_virtuel ,transport_id
    })
    return  res.status(200).json({p})
     }

  }catch(err){
    console.log(err)
  }
}
module.exports ={
    acceptParticipant
}