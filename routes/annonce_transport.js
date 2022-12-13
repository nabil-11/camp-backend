const express = require('express');
const { addTransport, findTransport, findTransportByUser } = require('../controllers/annonce_transport.controller');
const auth = require('../middlewares/auth')
const router = express.Router()
router.post('/',auth ,addTransport)
router.post('/transport',auth,findTransport )
router.get('/transport' , auth , findTransportByUser)
module.exports = router;
