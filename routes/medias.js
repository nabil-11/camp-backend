var express = require('express');
const { getMedia } = require('../controllers/media.controller');
var router = express.Router();
router.get("/", getMedia)

module.exports = router;