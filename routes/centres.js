var express = require('express');
const {  getCentre, createCentre, deleteCentre, updateCentre } = require('../controllers/centre.controller');
var router = express.Router();

router.get('/:id', getCentre);
router.post('/ajoutercentre', createCentre);
router.put('/:id',updateCentre);
router.delete('/:id', deleteCentre);

module.exports = router;
