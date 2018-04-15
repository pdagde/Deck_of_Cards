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

function login(req,callback){
        var query = {
          'user.name' : req.body.name,
          'user.age' : req.body.age
        }
        cardGame.find(query,function(err,result){
                callback.json(result[0]);
        })
}

function reset(req,callback){
        shuffle(cards);
          var query = {
                'user.hearts' : [],
                'user.clubs' : [],
                'user.diamond' : [],
                'user.spade' : [],
                'user.totalCard' : shuffle(cards)
               }

      cardGame.update({_id:req.body.userId},{$set:query},function(err,alldata){
           cardGame.find({_id:req.body.userId},function(err,result){
              callback.json(result[0]);
           })
      })
}

function updateUser(req,callback){
        // shuffle(cards);
          var query = {
                'user.name' : req.body.name,
                'user.age' : req.body.age
               }

      cardGame.update({_id:req.body.userId},{$set:query},function(err,alldata){
           console.log("111111111",JSON.stringify(alldata));
           console.log("111111111",JSON.stringify(err));
           cardGame.find({_id:req.body.userId},function(err,result){
             console.log("222222",JSON.stringify(err));
           console.log("2222222",JSON.stringify(result));
              callback.json(result[0]);
           })
      })
}

module.exports.signUpuser = signUpuser;
module.exports.saveData = saveData;
module.exports.login = login;
module.exports.reset = reset;
module.exports.updateUser = updateUser;


