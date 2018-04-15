'use strict';
var cardGame = require("./server_side/controller/api/auth/cardGame.js");
module.exports.register = function(router){
router.route('/cardGame/signUpuser').post(cardGame.signUpuser);
router.route('/cardGame/saveData').post(cardGame.saveData);
router.route('/cardGame/login').post(cardGame.login);


console.log('routes registered..!');
};

