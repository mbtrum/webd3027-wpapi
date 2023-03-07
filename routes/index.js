var express = require('express');
var WPAPI = require('wpapi');

var router = express.Router();

var wp = new WPAPI({
  endpoint: 'http://DOMAIN-NAME/wp-json',
  username: '',
  password: ''
});

/* GET home page. */
router.get('/', async function (req, res, next) {  
  /* Get the Posts from the WordPressAPI */  
  const data = await wp.posts();

  let posts = [];

  data.forEach(function (item) {
    posts.push(
      {
        title: item.title.rendered,
        excerpt: item.excerpt.rendered
      }
    );
  });
  
  res.render('index', { posts: posts });  
});


module.exports = router;





