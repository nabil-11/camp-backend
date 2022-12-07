var express = require('express');
const { getAllUsers, getUser, createUser, deleteUser, updateUser,login ,countusers} = require('../controllers/user.controller');
const validate = require('../middlewares/validator');
var router = express.Router();

router.post('/login',login);
router.get('/fetch', getAllUsers);
router.get('/countusers', countusers);
router.get('/:userId', getUser);
router.post('/add',  createUser);
router.put('/:userId', validate, updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;
