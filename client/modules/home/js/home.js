

angular.module('userHomeCtrl',['CardGameService'])
    .controller('homeCtrl',function ($scope,$rootScope,$state,$http,$window,CardGameService) {

$scope.userDetails = CardGameService.getUserInfo();
$scope.unplayedCard = $scope.userDetails.data.user.totalCard[$scope.userDetails.data.user.totalCard.length - 1];
$scope.totalcards = $scope.userDetails.data.user.totalCard; 


$scope.saveCurrentCard = function(card){
   $scope.selectedCards = card;
}

$scope.savespade = function(){
	  if(!$scope.selectedCards){
    		swal("Card Missing!", "please select above card!", "error");
	  }else if($scope.selectedCards.cardType != 'spade'){
	  		swal("wrong selection!", "please select spade!", "error");
	  }else{
	  		var index = $scope.userDetails.data.user.totalCard.indexOf($scope.selectedCards);
	  	    $scope.userDetails.data.user.totalCard.splice(index,1);
	  	    $scope.userDetails.data.user.diamond.unshift($scope.selectedCards);
	  	    $scope.selectedCards = '';
	  	    $scope.unplayedCard = $scope.userDetails.data.user.totalCard[$scope.userDetails.data.user.totalCard.length - 1];

	  }
}

$scope.savediamond = function(){
	  if(!$scope.selectedCards){
    		swal("Card Missing!", "please select above card!", "error");
	  }else if($scope.selectedCards.cardType != 'diamond'){
	  		swal("wrong selection!", "please select diamond!", "error");
	  }else{
	  	    var index = $scope.userDetails.data.user.totalCard.indexOf($scope.selectedCards);
	  	    $scope.userDetails.data.user.totalCard.splice(index,1);
	  	    $scope.userDetails.data.user.diamond.unshift($scope.selectedCards);
	  	    $scope.selectedCards = '';
	  	    $scope.unplayedCard = $scope.userDetails.data.user.totalCard[$scope.userDetails.data.user.totalCard.length - 1];

	  }
}
$scope.saveclibs = function(){
	  if(!$scope.selectedCards){
    	swal("Card Missing!", "please select above card!", "error");
	  }else if($scope.selectedCards.cardType != 'clubs'){
	  		swal("wrong selection!", "please select clubs!", "error");
	  }else{	
	  		var index = $scope.userDetails.data.user.totalCard.indexOf($scope.selectedCards);
	  	    $scope.userDetails.data.user.totalCard.splice(index,1);
	  	    $scope.userDetails.data.user.diamond.unshift($scope.selectedCards);
	  	    $scope.selectedCards = '';
	  	    $scope.unplayedCard = $scope.userDetails.data.user.totalCard[$scope.userDetails.data.user.totalCard.length - 1];

	  }
}
$scope.savehearts = function(){
	  if(!$scope.selectedCards){
    	swal("Card Missing!", "please select above card!", "error");
	  }else if($scope.selectedCards.cardType != 'hearts'){
	  		swal("wrong selection!", "please select hearts!", "error");
	  }else{
	  		var index = $scope.userDetails.data.user.totalCard.indexOf($scope.selectedCards);
	  	    $scope.userDetails.data.user.totalCard.splice(index,1);
	  	    $scope.userDetails.data.user.diamond.unshift($scope.selectedCards);
	  	    $scope.selectedCards = '';
	  	    $scope.unplayedCard = $scope.userDetails.data.user.totalCard[$scope.userDetails.data.user.totalCard.length - 1];

	  }
}


})