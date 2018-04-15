
'use strict';

var App = angular.module('card_game',['ui.router','appIndex']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
				$urlRouterProvider.otherwise("/app/landing");
				
				$stateProvider  
                    .state('app', {
                        url: "/app",
                        abstract: true
                    })
                    
			}]);

