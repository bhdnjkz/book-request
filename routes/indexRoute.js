const express = require('express')
const router = express.Router();
const controller = require('../controllers/routeControllers/indexController')

router.get('/', controller.get)

module.exports = router;