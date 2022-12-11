const {media} = require('../models')
const cloudinary = require("../config/cloudinary.config");

const getMedia = async (req, res) => {
    try {
      const { eventId } = req.params;
      const MediaData = await media.findOne({});
      if (!MediaData) {
        throw new Error("Event not found");
      }
      res.status(200).json({
        MediaData
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };
  const getMediaEvent = async (req, res) => {
    const {event_id}= req.params
    try {
    
      const MediaData = await media.findAll({event_id:event_id});
      if (!MediaData) {
        throw new Error("Event not found");
      }
      res.status(200).json({
        MediaData
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };
  const createMedia = async (req, res, next) => {
    const {url,event} = req.body;
    console.log(event.id,event.Deleg_dist)
    try { 
      const upload = await cloudinary.v2.uploader.upload(url);

      const createM = await media.create({
      type:upload.format,event_id:event.id,url:upload.secure_url,Gov:event.Gov_dist,Deleg:event.Deleg_dist,Lieu:event.Lieu_Exact_dist
      });
      console.log(createM)
      res.status(201).json({
        createM
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };
   module.exports ={
    getMedia,createMedia,getMediaEvent
   }