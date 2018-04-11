/**
 * Created by Pravin on 29/03/2018.
 */

angular.module('loginCodeCtrl',[])
    .controller('loginCtrl',function ($scope,$state,$http,$window) {
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



 
$scope.call = function(){
   var CLOUDINARY_URL="https://api.cloudinary.com/v1_1/djwmqlqrk/upload";
        var CLOUDINARY_UPLOAD_PRESET='gfu1dswz';
        var imgPreview=document.getElementById('img-preview');
        var fileUpload=document.getElementById('file-upload');

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
                $scope.UserRecords.avatar =  res.data.secure_url;
             imgPreview.src=res.data.secure_url;
            }).catch(function(err){
             console.error(err);
        });
     });

}

  



})
