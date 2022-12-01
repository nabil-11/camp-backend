var express = require('express');
const { getevent, createevent, getAllevents } = require('../controllers/event.controller');
var router = express.Router();
router.get('/',getAllevents);
router.post('/', createevent);

module.exports = router;