const express = require('express');
const { addTransport, findTransport, findTransportByUser, annulerTransport } = require('../controllers/annonce_transport.controller');
const auth = require('../middlewares/auth')
const router = express.Router()
router.post('/',auth ,addTransport)
router.post('/transport',auth,findTransport )
router.get('/transport' , auth , findTransportByUser)
router.delete('/:transport_id',annulerTransport)
module.exports = router;
