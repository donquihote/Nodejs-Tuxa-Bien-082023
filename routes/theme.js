var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Express' });
  });

router.get('/dashboard', function(req, res, next) {
    res.render('dashboard', { title: 'Express' });
  });

router.get('/list', function(req, res, next) {
    res.render('book-list', { title: 'Express' });
  });

router.get('/form', function(req, res, next) {
    res.render('category-form', { title: 'Express' });
  });
module.exports = router;