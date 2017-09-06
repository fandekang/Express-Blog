var express = require('express');
var router = express.Router();
var findart = require('../article').findart;



/* GET users listing. */



router.get('/', function(req, res, next) {
	var val = req.query.title.toString();
	findart('news', function(datas){
		res.render('article', {'list': datas[0]});
		console.log(datas)
	}, val);   
   
})

router.post('/', function(req, res, next) {
	var val = req.query.title.toString();
	findart('news', function(datas){
		res.render('article', {'list': datas[0]});
		console.log(datas)
	}, val);   
   
})

module.exports = router;
