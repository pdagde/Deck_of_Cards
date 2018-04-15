

angular.module('landingCtrl',['CardGameService'])
    .controller('landingCtrl',function ($scope,$rootScope,$state,$http,$window,CardGameService) {

   $scope.user = {};

 $scope.signup = function(){
  $state.go("app.login");
 }


$scope.loginUser = function(){
    CardGameService.login($scope.user);
}

})
