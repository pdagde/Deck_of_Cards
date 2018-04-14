
angular.module('appHome',['chatRoomCodeCtrl'])
    .config(function($stateProvider) {
        $stateProvider
        
            .state('app.login', {
                url: "/login",
                templateUrl: "modules/home/template/login.html",
                controller : "chatRoomCtrl"
            })
            
           
           

    });
