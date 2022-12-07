var express = require('express');
const { getAllTransports, createTransport, deleteTransport } = require('../controllers/transport.controller');

var router = express.Router();


router.get('/fetch', getAllTransports);
router.post('/ajoutertransport',  createTransport);
router.delete('/:id', deleteTransport);

module.exports = router;
