'use strict';
var cardGame = require("./server_side/controller/api/auth/cardGame.js");
module.exports.register = function(router){
router.route('/cardGame/signUpuser').post(cardGame.signUpuser);

console.log('routes registered..!');
};

