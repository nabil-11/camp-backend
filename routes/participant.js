const express  = require('express')
const { acceptParticipant } = require('../controllers/participant.controller')
const router = express.Router()
router.post('/',acceptParticipant)
module.exports = router