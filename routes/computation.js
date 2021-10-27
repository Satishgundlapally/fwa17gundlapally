var express = require('express');
var router = express.Router();
var value=Math.random()*10;
console.log(value);
var s= Math.log2(value)  ;
 
var g= Math.cosh(value) ;
/* GET home page. */
router.get('/', function(req, res, next) {

  res.send(`[ Math.log2() ] applied to [${value}] is [${s}]
[Math.cosh() ] applied to [${value}] is [${g}]`);

});

module.exports = router;