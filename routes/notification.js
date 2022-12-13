var express = require('express');
const { getAllnotifications,deleteNoty } = require("../controllers/notification.controller");


var router = express.Router();


router.get('/fetch', getAllnotifications);
router.delete('/delete', deleteNoty);



module.exports = router;
