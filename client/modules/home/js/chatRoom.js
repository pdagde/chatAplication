

angular.module('chatRoomCodeCtrl',['ChatService'])
    .controller('chatRoomCtrl',function ($scope,$state,$http,$window,ChatService) {

          $scope.admin = {};
          $scope.isalredyChatGroup = [];
          $scope.message = {};
          

            if($window.localStorage['admin']){
                $scope.loginAdmin = JSON.parse($window.localStorage['admin']);
               } 
             
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

            $http.post('/chatRoom/findchatGroup', {}).then(function (response) {
                 
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
               
        
          $scope.loginUserInfo = ChatService.getUserInfo();
          $scope.loginUserInfo = $scope.loginUserInfo.data
        

          $scope.createChatGroup = function(){
            $window.localStorage['admin'] =JSON.stringify($scope.admin);
            ChatService.store($scope.admin);
            $state.go('app.chatRoom')
            
          }

          $scope.loginUser = function(){
            $window.localStorage['admin'] =JSON.stringify($scope.admin);
            ChatService.loginUser($scope.admin);
            $state.go('app.chatRoom')
           
          }

          $scope.setActiveUser = function(){
            var name = $scope.loginAdmin.name +  ' is typing Message .....'
            var query = {
              name : name
            }
             
    ChatService.setActiveUser(query);
    
   }

         $scope.sendmessage = function(){
            
              var query = {
                name:$scope.adminDetails.name,
                email: $scope.adminDetails.email,
                avtar : $scope.adminDetails.url,
                message : $scope.message.sendTextmessage
              }

             
              $scope.allUsermessage = ChatService.sendmessage(query);
             
         }



   $scope.gotoLogin = function(){
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
    console.log("2");
    $scope.admin.url = res.data.url;
    console.log(res);
    imgPreview.src=res.data.secure_url;
  }).catch(function(err){
    console.error(err);
  });
});
}




})
