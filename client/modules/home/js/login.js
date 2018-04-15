

angular.module('loginCtrl',['CardGameService'])
    .controller('loginCtrl',function ($scope,$rootScope,$state,$http,$window,CardGameService) {

 $scope.selectedPhotoNumber = [];
 $scope.userSkill = [];
 $scope.selectedPhoto = '';
 // $scope.selectedProfile = -1;
 $scope.user = {};

$scope.addSkill = function(){
  $scope.userSkill.push($scope.userskill);
  $scope.userskill = '';
}

$scope.RadioChange = function(selectedPhoto){
    $scope.selectedPhoto = $scope.selectedPhotoNumber[selectedPhoto];
    // $scope.apply();
}

$scope.loginUser = function(){
   $scope.user.profile = $scope.selectedPhoto;
    $scope.user.skill = $scope.userSkill;
   $scope.user.images = $scope.selectedPhotoNumber;

   if(!$scope.user.images[0]){
      swal("Photo is compulsory!", "please select photo!", "error");
   }else if(!$scope.user.skill){
       swal("skill is compulsory!", "please put skill!", "error");
   }else if(!$scope.user.age){
         swal("age is compulsory!", "please Enter age!", "error");
   }else if(!$scope.user.name){
         swal("Name is compulsory!", "please Enter Name!", "error");
   }else if(!$scope.user.profile){
           swal("Profile photo is compulsory!", "please select photo as profile!", "error");
   }else{
      $http.post('/cardGame/signUpuser',$scope.user).then(function(responce){
        // console.log("AAAAAAAAAAA",JSON.stringify($scope.selectedPhoto));
        CardGameService.storeUser(responce);
        $state.go('app.home');
      })
   }

   
   
   

}

$scope.Login = function(){
  $state.go("app.landing");
}
         
var CLOUDINARY_URL="https://api.cloudinary.com/v1_1/djwmqlqrk/upload";
var CLOUDINARY_UPLOAD_PRESET='gfu1dswz';
var imgPreview=document.getElementById('img-preview');
var fileUpload=document.getElementById('file-upload');
if(fileUpload){
  fileUpload.addEventListener('change',function(event){
  var file=event.target.files[0];
  var formData=new FormData();
  formData.append('file',file);
  formData.append('upload_preset',CLOUDINARY_UPLOAD_PRESET);
 
  axios({
    url:CLOUDINARY_URL,
    method:'POST',
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    },
    data:formData
  }).then(function(res){
    $scope.selectedPhotoNumber.push(res.data.url);

    // console.log("2kjhkjhkhkjkj",JSON.stringify($rootScope.selectedPhotoNumber));
    
    $scope.$apply();
    console.log(res);
    imgPreview.src=res.data.secure_url;
  }).catch(function(err){
    console.error(err);
  });
});
}




})
