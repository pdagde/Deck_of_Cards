var shuffle = require('shuffle-array');
    
 
var cardGame = require('../../../server/cardGame');
var cards = require('../../../server/card');

function signUpuser(req,callback){
    
    var newuser = new cardGame();
    newuser.user.name = req.body.name;
    newuser.user.age = req.body.age;
    newuser.user.profile = req.body.profile;
    newuser.user.userPhoto = req.body.images;

console.log("111111111111",JSON.stringify(cards));
    shuffle(cards);

    newuser.user.totalCard = cards;
    console.log("222222222222",JSON.stringify(cards));
    newuser.save(function (err, savedUser) {
    	console.log("errerrerrerrerr",JSON.stringify(err));
    	// console.log("AAAAAAAAAAAAAA",JSON.stringify(savedUser));
      callback.json(savedUser);
    })
}

module.exports.signUpuser = signUpuser;






