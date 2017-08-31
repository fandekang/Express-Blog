var express = require('express');
var router = express.Router();
var conn=require('../model/conn');
var conn=conn.conn;
/* GET users listing. */
router.get('/', function(req, res, next) {
  // conn(test,function(data){

  // })
  res.render('list', { title: 'Express' });
});

module.exports = router;
