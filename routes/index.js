var express = require('express');
var router = express.Router();
//a partir de aquí ya puedo sacar cada grano de controllers/quiz
const quizCtrl = require('../controllers/quiz');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});
//Quizzes page.
//router.get('/quizzes', (req, res, next) => {
//	res.render('quizzes');
//});
router.get('/quizzes', quizCtrl.index);

//Credits page.
router.get('/credits', (req, res, next) => {
	res.render('credits');
});

module.exports = router;
