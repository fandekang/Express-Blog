var express = require('express');
var router = express.Router();
var conn = require('../model/conn').conn;

var deal = {
	funs: {
		name: 'find',
		query: {},
	},
	colName: 'news',	
}

/* GET users listing. */



router.get('/', function(req, res, next) {
	conn(deal,function(data){
		// var datalen=data.length;
		// console.log(datalen);
		// var dataNum=[];
		// for(var i=0;i<datalen;i++){
		// 	dataNum.push(i+1);
		// }
		res.render('article', { title: 'Express',list: data.find});
	})
   
})

// router.get('/', function(req, res, next) {
// 	conn(deal,function(data){
// 		res.render("article",{content:req.body.Des});
// 	})
// })

router.post('/',function(req,res,next){
	conn(deal,function(data){
		res.render('article', { title: 'Express',list: data.find});
	})
})

module.exports = router;
