

'use strict';

// Public API

    angular.module('CardGameService', [])

        .factory('CardGameService', function ($rootScope,$window,$http) {
           
            var cardGame = {};
            
            cardGame.storeUser = function(value){
            	$window.localStorage['userInfo'] =JSON.stringify(value);
              }

              cardGame.getUserInfo = function(){
              	var userDetails = JSON.parse($window.localStorage['userInfo']);
              	return userDetails;
              }

              cardGame.saveChanges = function(userdata){
                $http.post('/cardGame/saveData',userdata).then(function(responce){
                  $window.localStorage['userInfo'] =JSON.stringify(responce);
                })
                console.log("userDATAuserDATAuserDATA",JSON.stringify(userdata));
              } 
          

           

            return cardGame;
        });
