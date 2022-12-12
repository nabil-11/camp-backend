var express = require('express');
const auth = require('../middlewares/auth')
const { getevent, createevent, getAllevents,countEvents } = require('../controllers/event.controller');

var router = express.Router();
router.get('/',auth,getAllevents);
router.get('/event',getevent)
router.post('/',auth, createevent);
router.get('/countrevents',countEvents);


module.exports = router;