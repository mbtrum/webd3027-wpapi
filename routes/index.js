var express = require('express');
var WPAPI = require('wpapi');

var router = express.Router();

/* Get the Post from the WordPressAPI */

var wp = new WPAPI({
  endpoint: 'http://news.webd3027.ca/wp-json',
  username: 'trumbull',
  password: 'nscc123'
});

// Get the Posts
wp.posts().get(function (err, data) {
  if (err) {
    // handle err
  }
  // do something with the returned posts   

  var count = data.length;
  // forEach()

  /* GET home page. */
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', numPosts: count });
  });

});

module.exports = router;





