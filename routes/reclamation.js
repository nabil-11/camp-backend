var express = require('express');
const {createContact, getAllReclamations,deleteReclamatrions } = require("../controllers/reclamation.controller");


var router = express.Router();


router.get('/fetch', getAllReclamations);
router.post('/add', createContact);
router.delete('/:userId', deleteReclamatrions);


module.exports = router;
