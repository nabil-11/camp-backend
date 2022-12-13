var express = require('express');
const { getMedia,createMedia, getMediaEvent } = require('../controllers/media.controller');
const uploader = require("../config/multer");
var router = express.Router();

router.get("/", getMedia)
router.post("/",createMedia)
router.get("/event/:event_id",getMediaEvent)
module.exports = router;