var express = require('express');
var router = express.Router();

/* GET Post Form. */
router.get('/', function(req, res, next) {
  res.render('post', { title: 'New Post' });
});

module.exports = router;
