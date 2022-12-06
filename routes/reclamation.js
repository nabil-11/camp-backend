var express = require('express');
const { getAllReclamations,deleteReclamatrions } = require("../controllers/reclamation.controller");


var router = express.Router();


router.get('/fetch', getAllReclamations);
router.delete('/:userId', deleteReclamatrions);


module.exports = router;
