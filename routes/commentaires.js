var express = require('express');
const {  getCommentaire, createCommentaire, deleteCommentaire, updateCommentaire } = require('../controllers/commentaire.controller');
var router = express.Router();

router.get('/affichercommentaire', getCommentaire);
router.post('/ajoutercommentaire', createCommentaire);
router.put('/:id',updateCommentaire);
router.delete('/:id', deleteCommentaire);

module.exports = router;
