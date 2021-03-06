angular.module('appHome', ['loginCtrl', 'userHomeCtrl', 'landingCtrl', 'userProfileCtrl'])
    .config(function ($stateProvider) {
        $stateProvider

            .state('app.login', {
                url: "/login",
                templateUrl: "modules/home/template/login.html",
                controller: "loginCtrl"
            })
            .state('app.home', {
                url: "/home",
                templateUrl: "modules/home/template/home.html",
                controller: "homeCtrl"
            })
            .state('app.landing', {
                url: "/landing",
                templateUrl: "modules/home/template/landing.html",
                controller: "landingCtrl"
            })
            .state('app.profile', {
                url: "/profile",
                templateUrl: "modules/home/template/profile.html",
                controller: "profileCtrl"
            })


    });
