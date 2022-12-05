const {Media} = require('../models/media.model')
const getMedia = async (req, res) => {
    try {
      const { eventId } = req.params;
      const MediaData = await Media.findOne({});
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
   module.exports ={
    getMedia
   }