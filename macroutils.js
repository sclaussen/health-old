'use strict'


var readlineSync = require('readline-sync');


const p = require('./util').p;
const STATUS = require('./k').STATUS;
const THRESHOLD = require('./k').THRESHOLD;






module.exports.add = add;
module.exports.addOptimalAmount = addOptimalAmount;
module.exports.threshold = threshold;
