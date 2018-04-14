
'use strict';

var App = angular.module('chat_rooms',['ui.router','appIndex']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
				$urlRouterProvider.otherwise("/app/login");
				
				$stateProvider  
                    .state('app', {
                        url: "/app",
                        abstract: true
                    })
                    
			}]);

