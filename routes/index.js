const PostModel = require('../models/post.js')
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', async function(req, res, next) {
  const messages = await PostModel.find().sort({ date: -1 });
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: "Mini Messageboard" })
});

router.post('/new', async function(req, res, next) {
  try {
    await PostModel.create({ text: req.body.text, user: req.body.user, date: new Date()})
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
