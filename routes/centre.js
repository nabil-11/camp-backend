const express = require('express');
const {createCentre,getAllCentre,updateCentre,deleteCentre,countCentres } = require("../controllers/centre.controller");


const router = express.Router();


router.get('/fetch', getAllCentre);
router.get('/countCentres', countCentres);
router.post('/add', createCentre);
router.delete('/:userId', deleteCentre);
router.put('/:userId', updateCentre);


 
module.exports = router;
