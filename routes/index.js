var express = require('express');
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Armando",
    added: new Date().toLocaleDateString()
  },
  {
    text: "Hi World!",
    user: "Charles",
    added: new Date().toLocaleDateString()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: "Mini Messageboard" })
});

module.exports = router;
