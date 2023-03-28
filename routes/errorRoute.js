const express = require('express')
const router = express.Router();
const controller = require('../controllers/routeControllers/indexController')

router.get('/error', (req, res) => {
    res.send('error!')
})

module.exports = router;