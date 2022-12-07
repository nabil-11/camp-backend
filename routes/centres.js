var express = require('express');
const {  getAllCentres, createCentre, deleteCentre, updateCentre } = require('../controllers/centre.controller');
var router = express.Router();

router.get('/affichercentre', getAllCentres);
router.post('/ajoutercentre', createCentre);
router.put('/:id',updateCentre);
router.delete('/:id', deleteCentre);

module.exports = router;
