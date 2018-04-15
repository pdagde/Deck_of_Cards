var mongoose = require('mongoose');

var schema = new mongoose.Schema({

             user : {
                      name : {type : String},
                      age :{type : Number},
                      profile : {type : String},
                      userPhoto : [{type : String}],
                      totalCard  : [{
                                      cardType : {type: String, enum : ['spade','diamond','clubs','hearts']},
                                      Number : {type : String}
                                  }],
                       spade : [{
                                    cardType : {type: String, default:'spade', enum : ['spade']},
                                      Number : {type : String}
                                }],
                       diamond : [{
                                    cardType : {type: String, default:'diamond', enum : ['diamond']},
                                      Number : {type : String}
                                }],
                       clubs : [{
                                    cardType : {type: String, default:'clubs', enum : ['clubs']},
                                      Number : {type : String}
                                }],
                       hearts : [{
                                    cardType : {type: String, default:'hearts', enum : ['hearts']},
                                      Number : {type : String}
                                }]            
                  }
})

module.exports = mongoose.model('cardGame',schema);
