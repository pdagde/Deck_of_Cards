var shuffle = require('shuffle-array');
    
 
var cardGame = require('../../../server/cardGame');
var cards = require('../../../server/card');

function signUpuser(req,callback){
    
    var newuser = new cardGame();
    newuser.user.name = req.body.name;
    newuser.user.age = req.body.age;
    newuser.user.profile = req.body.profile;
    newuser.user.userPhoto = req.body.images;
    shuffle(cards);
    newuser.user.totalCard = cards;
    newuser.save(function (err, savedUser) {
      callback.json(savedUser);
    })
}

function saveData(req,callback){
  
  var query = {
        'user.hearts' : req.body.data.user.hearts,
        'user.clubs' : req.body.data.user.clubs,
        'user.diamond' : req.body.data.user.diamond,
        'user.spade' : req.body.data.user.spade,
        'user.totalCard' : req.body.data.user.totalCard
  }

cardGame.update({_id:req.body.data._id},{$set:query},function(err,alldata){
     cardGame.find({_id:req.body.data._id},function(err,result){
        callback.json(result[0]);
     })
})
}

module.exports.signUpuser = signUpuser;
module.exports.saveData = saveData;





