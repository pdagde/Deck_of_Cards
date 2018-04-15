

'use strict';

// Public API

    angular.module('CardGameService', [])

        .factory('CardGameService', function ($rootScope,$window,$state,$http) {
           
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
              
              cardGame.logout = function(userdata){
                $window.localStorage['userInfo'] =JSON.stringify({});
              }

              cardGame.login = function(userdata){
                $http.post('/cardGame/login',userdata).then(function(responce){
                  $window.localStorage['userInfo'] =JSON.stringify(responce);
                  $state.go('app.home');
                })
              }  

              cardGame.updateUser = function(userdata){
                $http.post('/cardGame/updateUser',userdata).then(function(responce){
                  $window.localStorage['userInfo'] =JSON.stringify(responce);
                  $state.go('app.home');
                })
              }
              
             
           

            return cardGame;
        });
