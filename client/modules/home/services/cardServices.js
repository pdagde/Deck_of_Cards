

'use strict';

// Public API

    angular.module('CardGameService', [])

        .factory('CardGameService', function ($rootScope,$window,$http) {
           
            var cardGame = {};
            
            cardGame.storeUser = function(value){
            	$window.localStorage['userInfo'] =JSON.stringify(value);
                 // console.log("XXXXXXXXXXXXXX",JSON.stringify(value));
              }

              cardGame.getUserInfo = function(){
              	var userDetails = JSON.parse($window.localStorage['userInfo']);
              	return userDetails;
              }

          


            

            return cardGame;
        });
