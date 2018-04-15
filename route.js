'use strict';
var cardGame = require("./server_side/controller/api/auth/cardGame.js");
module.exports.register = function(router){
router.route('/cardGame/signUpuser').post(cardGame.signUpuser);
router.route('/cardGame/saveData').post(cardGame.saveData);
router.route('/cardGame/login').post(cardGame.login);
router.route('/cardGame/reset').post(cardGame.reset);
router.route('/cardGame/updateUser').post(cardGame.updateUser);

console.log('routes registered..!');
};

