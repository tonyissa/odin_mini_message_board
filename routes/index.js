const PostModel = require('../models/post.js')
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', async function(req, res, next) {
  const messages = await PostModel.find()
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: "Mini Messageboard" })
});

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.text, user: req.body.author, added: new Date().toLocaleDateString()})
  res.redirect('/');
});

module.exports = router;
