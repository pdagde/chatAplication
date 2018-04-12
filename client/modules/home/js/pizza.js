

angular.module('pizzaHutCodeCtrl',['ChatService'])
    .controller('pizzaCtrl',function ($scope,$state,$http,$window,ChatService) {

          $scope.admin = {};
          $scope.isalredyChatGroup = [];
          $scope.message = {};
          // $scope.createdGroup = {};

            if($window.localStorage['admin']){
                $scope.loginAdmin = JSON.parse($window.localStorage['admin']);
               } 
               console.log("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",JSON.stringify($scope.loginAdmin));
               $window.onbeforeunload = function (e) {

                      if($scope.loginAdmin){
                        $scope.loginAdmin = '';
                        $window.localStorage['admin'] =JSON.stringify('');
                        $window.localStorage['loginUser'] =JSON.stringify('');
                        $window.localStorage['allmessage'] =JSON.stringify('');
                         return "YOUR DATA MIGHT GET LOST...";;
                      }
                        
                };


          setInterval(function(){

            $http.post('/pizza/findchatGroup', {}).then(function (response) {
                 // console.log("asdasdasdasd",JSON.stringify(response));
                 $scope.createdGroup = response;
                 if(response.data[0] && response.data[0].groups[0] && response.data[0].groups[0].chatDetails){
                    $scope.allBuffurMessages = response.data[0].groups[0].chatDetails
                    $scope.isalredyChatGroup = response.data[0].groups;
                     
                 }else{
                    $scope.allBuffurMessages = [];
                 }

                })
               
          }, 500)

          setInterval(function(){

                  var query = {
                    name : 'Enter Text Message Here .....'
                  }
                  ChatService.setActiveUser(query);
               
          }, 7000)



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
            console.log("WWWWWWWWWWWWWWWWWWWWWWW",JSON.stringify($scope.admin));
            $window.localStorage['admin'] =JSON.stringify($scope.admin);
            ChatService.store($scope.admin);
            $state.go('app.pizza')
            // 
          }

          $scope.loginUser = function(){
            $window.localStorage['admin'] =JSON.stringify($scope.admin);
            ChatService.loginUser($scope.admin);
            $state.go('app.pizza')
           
          }

          $scope.setActiveUser = function(){
            var name = $scope.loginAdmin.name +  ' is typing Message .....'
            var query = {
              name : name
            }
             // console.log("KKKKKKKKKKKKKKKKKKKKKKKK",JSON.stringify(query));
    ChatService.setActiveUser(query);
    
   }

         $scope.sendmessage = function(){
              console.log("lklklklklklklklklklklklklklk",JSON.stringify($scope.adminDetails));

              var query = {
                name:$scope.adminDetails.name,
                email: $scope.adminDetails.email,
                avtar : $scope.adminDetails.url,
                message : $scope.message.sendTextmessage
              }

              console.log("jaksgdahsdkjasd",JSON.stringify(query));
              $scope.allUsermessage = ChatService.sendmessage(query);
               console.log("lklklklklklklklklklklklklklk",JSON.stringify( $scope.allUsermessage));
         }



   $scope.gotoLogin = function(){
    console.log("lklklklklklklklklklklklklklk",JSON.stringify( $scope.allUsermessage));
       if($scope.isalredyChatGroup[0]){
        $state.go('app.chatlogin');
       }else{
        $state.go('app.login');
       }
       
   }





var CLOUDINARY_URL="https://api.cloudinary.com/v1_1/djwmqlqrk/upload";
var CLOUDINARY_UPLOAD_PRESET='gfu1dswz';
var imgPreview=document.getElementById('img-preview');
var fileUpload=document.getElementById('file-upload');







// var el = document.getElementById('overlayBtn');
if(fileUpload){
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
    $scope.admin.url = res.data.url;
    console.log("333333333333",JSON.stringify(res));
    console.log(res);
    imgPreview.src=res.data.secure_url;
  }).catch(function(err){
    console.log("333333333333");
    console.error(err);
  });
});
}














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
