var express = require('express');
const {createContact, getAllReclamations,deleteReclamatrions,acceptContact } = require("../controllers/reclamation.controller");


var router = express.Router();


router.get('/fetch', getAllReclamations);
router.post('/add', createContact);
router.delete('/:userId', deleteReclamatrions);
router.put('/:userId',  acceptContact);

 
module.exports = router;
