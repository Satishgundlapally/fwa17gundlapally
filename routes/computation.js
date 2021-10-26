var express = require('express');
var router = express.Router();
var value=Math.random();
console.log(value);
var s= Math.log2()  ;
 
var g= Math.cosh() ;
/* GET home page. */
router.get('/', function(req, res, next) {

  res.send(`[ Math.log2() ] applied to [${value}] is [${s}]
[Math.cosh() ] applied to [${value}] is [${g}]`);

});

module.exports = router;