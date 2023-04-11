const express = require('express')
const router = express.Router();
const indexController = require('../controllers/index-controller')
const bookController = require('../controllers/books-list-controller')

router.get('/', indexController.get);
router.post('/', indexController.post);

router.get('/books', bookController.get);

router.get('*', (req, res) => {
    res.redirect('/error')
  });
  

module.exports = router;