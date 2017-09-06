var express = require('express');
var router = express.Router();
var conn = require('../model/conn').conn;

/* GET home page. */

var deal = {
	funs: [{
		name: 'find',
		query: {},
		limit: 5,
		skip: 0
	},{
		name: 'count',
		query: {}
	}],
	colName: 'news',	
}

router.get('/', function(req, res, next) {
	if(req.query.page){
		deal.funs[0].skip = (req.query.page - 1) * 5;
	}
	conn(deal, function(data){
		// var datalen=data.length;
		// console.log(datalen)
		// var dataNum=[];
		// for(var i=0;i<datalen;i++){
		// 	dataNum.push(i+1);
		// }
		var len = Math.ceil((data.count - 0)/5);
		var pageArr = [];
		for(var i = 0; i < len; i++){
			pageArr.push(i + 1);
		}
		pageArr.splice(3, (len - 6))
		pageArr.splice(3, 0, '···')

		res.render('index', {list: data.find, pages: pageArr});
	})
});


router.get('/', function(req, res, next) {
	if(req.query.page){
		deal.funs[0].skip = (req.query.page - 1) * 5;
	}
	conn(deal, function(data){
		// var datalen=data.length;
		// var dataNum=[];
		// for(var i=0;i<datalen;i++){
		// 	dataNum.push(i+1);
		// }
		var len = Math.ceil((data.count - 0)/5);
		var pageArr = [];
		for(var i = 0; i < len; i++){
			pageArr.push(i + 1);
		}
		pageArr.splice(3, (len - 6))
		pageArr.splice(3, 0, '···')

		res.render('index', {list: data.find, pages: pageArr});
	})
});
module.exports = router;



