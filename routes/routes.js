const express = require('express')
const router = express.Router();
const indexController = require('../controllers/indexController')
const bookController = require('../controllers/books-page-controller')

router.get('/', indexController.get);
router.post('/', indexController.post);

router.get('/books', bookController.get);

router.get('*', (req, res) => {
    res.redirect('/error')
  });
  

module.exports = router;