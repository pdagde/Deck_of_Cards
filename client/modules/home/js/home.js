angular.module('userHomeCtrl', ['CardGameService'])
    .controller('homeCtrl', function ($scope, $rootScope, $state, $http, $window, CardGameService) {

        $scope.userDetails = CardGameService.getUserInfo();
        $scope.unplayedCard = $scope.userDetails.data.user.totalCard[$scope.userDetails.data.user.totalCard.length - 1];
        $scope.totalcards = $scope.userDetails.data.user.totalCard;


        $scope.userProfile = $scope.userDetails.data.user.profile;
        $scope.Username = $scope.userDetails.data.user.name;


        $scope.saveCurrentCard = function (card) {
            $scope.selectedCards = card;
        }

        $scope.savespade = function () {
            if (!$scope.selectedCards) {
                swal("Card Missing!", "please select above card!", "error");
            } else if ($scope.selectedCards.cardType != 'spade') {
                swal("wrong selection!", "please select correct!", "error");
            } else {
                var index = $scope.userDetails.data.user.totalCard.indexOf($scope.selectedCards);
                $scope.userDetails.data.user.totalCard.splice(index, 1);
                $scope.userDetails.data.user.spade.unshift($scope.selectedCards);
                $scope.selectedCards = '';
                $scope.unplayedCard = $scope.userDetails.data.user.totalCard[$scope.userDetails.data.user.totalCard.length - 1];
                CardGameService.saveChanges($scope.userDetails);
                if(!$scope.userDetails.data.user.totalCard[0]){
                         swal({
                               title: "congratulation !",
                               text: "You have complated this Game!",
                               icon: "success",
                             });
                }

            }
        }

        $scope.savediamond = function () {
            if (!$scope.selectedCards) {
                swal("Card Missing!", "please select above card!", "error");
            } else if ($scope.selectedCards.cardType != 'diamond') {
                swal("wrong selection!", "please select correct!", "error");
            } else {
                var index = $scope.userDetails.data.user.totalCard.indexOf($scope.selectedCards);
                $scope.userDetails.data.user.totalCard.splice(index, 1);
                $scope.userDetails.data.user.diamond.unshift($scope.selectedCards);
                $scope.selectedCards = '';
                $scope.unplayedCard = $scope.userDetails.data.user.totalCard[$scope.userDetails.data.user.totalCard.length - 1];
                CardGameService.saveChanges($scope.userDetails);
                if(!$scope.userDetails.data.user.totalCard[0]){
                             swal({
                               title: "congratulation !",
                               text: "You have complated this Game!",
                               icon: "success",
                             });
                }
            }
        }
        $scope.saveclibs = function () {
            if (!$scope.selectedCards) {
                swal("Card Missing!", "please select above card!", "error");
            } else if ($scope.selectedCards.cardType != 'clubs') {
                swal("wrong selection!", "please select correct!", "error");
            } else {
                var index = $scope.userDetails.data.user.totalCard.indexOf($scope.selectedCards);
                $scope.userDetails.data.user.totalCard.splice(index, 1);
                $scope.userDetails.data.user.clubs.unshift($scope.selectedCards);
                $scope.selectedCards = '';
                $scope.unplayedCard = $scope.userDetails.data.user.totalCard[$scope.userDetails.data.user.totalCard.length - 1];
                CardGameService.saveChanges($scope.userDetails);
                if(!$scope.userDetails.data.user.totalCard[0]){
                             swal({
                               title: "congratulation !",
                               text: "You have complated this Game!",
                               icon: "success",
                             });
                }
            }
        }
        $scope.savehearts = function () {
            if (!$scope.selectedCards) {
                swal("Card Missing!", "please select above card!", "error");
            } else if ($scope.selectedCards.cardType != 'hearts') {
                swal("wrong selection!", "please select correct!", "error");
            } else {
                var index = $scope.userDetails.data.user.totalCard.indexOf($scope.selectedCards);
                $scope.userDetails.data.user.totalCard.splice(index, 1);
                $scope.userDetails.data.user.hearts.unshift($scope.selectedCards);
                $scope.selectedCards = '';
                $scope.unplayedCard = $scope.userDetails.data.user.totalCard[$scope.userDetails.data.user.totalCard.length - 1];
                CardGameService.saveChanges($scope.userDetails);
                if(!$scope.userDetails.data.user.totalCard[0]){
                            swal({
                               title: "congratulation !",
                               text: "You have complated this Game!",
                               icon: "success",
                             });
                }
            }
        }

        $scope.logout = function () {
            CardGameService.logout();
            $state.go("app.landing");
        }

        $scope.restart = function () {
            var query = {
                userId: $scope.userDetails.data._id
            }


            $http.post('/cardGame/reset', query).then(function (responce) {
                $scope.userDetails = [];
                $window.localStorage['userInfo'] = JSON.stringify(responce);
                $scope.userDetails = CardGameService.getUserInfo();
                $scope.totalcards = [];
                $scope.totalcards = $scope.userDetails.data.user.totalCard;
                $scope.unplayedCard = $scope.userDetails.data.user.totalCard[$scope.userDetails.data.user.totalCard.length - 1];

                $state.go('app.home');
            })
        }


        $scope.editProfile = function () {
            $state.go('app.profile');
        }


    })
