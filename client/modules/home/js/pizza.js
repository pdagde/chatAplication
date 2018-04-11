/**
 * Created by Pravin on 29/03/2018.
 */

angular.module('pizzaHutCodeCtrl',['ChatService'])
    .controller('pizzaCtrl',function ($scope,$state,$http,$window,ChatService) {

          $scope.admin = {};
          // $scope.createdGroup = {};


          setInterval(function(){

            $http.post('/pizza/findchatGroup', {}).then(function (response) {
                 $scope.createdGroup = response;
                 if(response.data[0] && response.data[0].groups[0] && response.data[0].groups[0].chatDetails){
                    $scope.allBuffurMessages = response.data[0].groups[0].chatDetails
                 }else{
                    $scope.allBuffurMessages = [];
                 }
                })
              console.log("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
          }, 1000)

          



             if($window.localStorage['admin']){
                $scope.adminDetails = JSON.parse($window.localStorage['admin']);
               }
               if($window.localStorage['allmessage']){
                $scope.allUsermessage = JSON.parse($window.localStorage['allmessage']);
               }
               
         // $scope.createdGroup = ChatService.fetchGroup();
          $scope.loginUserInfo = ChatService.getUserInfo();
          $scope.loginUserInfo = $scope.loginUserInfo.data
          // console.log("jhfghfgffdsfdsfdfdss",JSON.stringify(loginUserInfo.data._id)) 

          $scope.createChatGroup = function(){
            $window.localStorage['admin'] =JSON.stringify($scope.admin);
            ChatService.store($scope.admin);
            // 
          }

          $scope.loginUser = function(){
            $window.localStorage['admin'] =JSON.stringify($scope.admin);
            ChatService.loginUser($scope.admin);
           
          }

         $scope.sendmessage = function(){


              var query = {
                name:$scope.adminDetails.name,
                email: $scope.adminDetails.email,
                avtar : 'sdfsdf',
                message : $scope.sendTextmessage
              }

              console.log("jaksgdahsdkjasd",JSON.stringify(query));
              $scope.allUsermessage = ChatService.sendmessage(query);
               console.log("lklklklklklklklklklklklklklk",JSON.stringify( $scope.allUsermessage));
         }









var CLOUDINARY_URL="https://api.cloudinary.com/v1_1/djwmqlqrk/upload";
var CLOUDINARY_UPLOAD_PRESET='gfu1dswz';
var imgPreview=document.getElementById('img-preview');
var fileUpload=document.getElementById('file-upload');

fileUpload.addEventListener('change',function(event){
  console.log("11111111111111111111");
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
    console.log("2");
    console.log(res);
    imgPreview.src=res.data.secure_url;
  }).catch(function(err){
    console.log("333333333333");
    console.error(err);
  });
});


















       $scope.loginuser = function(){
        $state.go("app.login");
       }



       $scope.checkUser = function(){
        $http.post('/pizza/allPizz',{}).then(function (response) {
                 $scope.allPizza = response.data;
              });
       }
       $scope.checkUser();
     $scope.viwPizza = function(pizza){
      var discountPrice = (pizza.price * pizza.discount)/100;
      $scope.viewPizza = pizza;
      $scope.viewPizza.discountPrice = discountPrice;
      $scope.viewPizza.BillPrice = pizza.price - discountPrice;
     }  

     $scope.orderPizza = function(pizza){
      var discountPrice = (pizza.price * pizza.discount)/100;
      $scope.viewPizza = pizza;
      $scope.viewPizza.discountPrice = discountPrice;
      $scope.viewPizza.BillPrice = pizza.price - discountPrice;
      $http.post('/pizza/newpostorder',$scope.viewPizza).then(function (response) {
                 $scope.allPizza = response.data;
               swal({
               title: "Thank You!",
               text: "Your order will be delivered in 30 minutes!",
               icon: "success",
             });

      });
     }



  


})
