
angular.module('appHome',['loginCtrl','userHomeCtrl'])
    .config(function($stateProvider) {
        $stateProvider
        
            .state('app.login', {
                url: "/login",
                templateUrl: "modules/home/template/login.html",
                controller : "loginCtrl"
            })
            .state('app.home', {
                url: "/home",
                templateUrl: "modules/home/template/home.html",
                controller : "homeCtrl"
            })
           
           

    });
