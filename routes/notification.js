var express = require('express');
const { getAllnotifications } = require("../controllers/notification.controller");


var router = express.Router();


router.get('/fetch', getAllnotifications);



module.exports = router;
