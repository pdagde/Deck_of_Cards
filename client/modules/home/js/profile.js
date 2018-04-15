

angular.module('userProfileCtrl',['CardGameService'])
    .controller('profileCtrl',function ($scope,$rootScope,$state,$http,$window,CardGameService) {

$scope.userDetails = CardGameService.getUserInfo();
$scope.unplayedCard = $scope.userDetails.data.user.totalCard[$scope.userDetails.data.user.totalCard.length - 1];
$scope.totalcards = $scope.userDetails.data.user.totalCard; 
$scope.userProfile = $scope.userDetails.data.user.profile;
$scope.canEditName = false;
$scope.canEditAge = false;
$scope.user = {
	name : $scope.userDetails.data.user.name,
	age : $scope.userDetails.data.user.age
};

console.log("XXXXXXXXXXXXX",JSON.stringify($scope.userDetails)); 
$scope.editProfile = function(){
  $scope.canEditName = true;
}
$scope.editage = function(){
	$scope.canEditAge = true;
}

$scope.doneEditing = function(){
	$scope.canEditName = false;	
	$scope.canEditAge = false;
}

$scope.updateUser = function(){
	$scope.user.userId = $scope.userDetails.data._id;

	 console.log("WWWWWWWWWWWWW",JSON.stringify($scope.user));
	CardGameService.updateUser($scope.user);
}

})
