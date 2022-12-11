var express = require('express');
const { getevent, createevent, getAllevents,countEvents } = require('../controllers/event.controller');
var router = express.Router();
router.get('/',getAllevents);
router.get('/countrevents',countEvents);
router.post('/', createevent);

module.exports = router;