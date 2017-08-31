var express = require('express');
var router = express.Router();
var conn=require('../model/conn');
var login=conn.login;
var register=conn.register;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/',function(req,res,next){
  //登陆
  if(req.body.fun=='find'){
    login('user', function(data){
      console.log(req.body);
      console.log(data);
       res.send(data);
     }, {'uName': req.body.uName, 'uPwd': req.body.uPwd});
  }
  

     //注册
     if(req.body.fun=='insert'){
      register('user',function(data){ 
        console.log(req.body);   
        res.send(data);
      }, {'uName': req.body.uName, 'uPwd': req.body.uPwd});
     }
     
    
  
})


module.exports = router;
