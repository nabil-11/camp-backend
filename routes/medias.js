var express = require('express');
const { getMedia,createMedia, getMediaEvent, getAllMedia, deleteMedia } = require('../controllers/media.controller');
const uploader = require("../config/multer");
var router = express.Router();

router.get("/", getMedia)
router.post("/",createMedia)
router.get("/event/:event_id",getMediaEvent)
router.get("/medias" ,getAllMedia )
router.delete('/:media_id', deleteMedia);
module.exports = router;