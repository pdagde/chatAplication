

'use strict';

// Public API

    angular.module('ChatService', [])

        .factory('ChatService', function ($rootScope,$window,$http) {
           
            var chatMessage = {};
           
           chatMessage.store = function(value){
                $http.post('/pizza/createChatGroup', value).then(function (response) {
                   return response;
                })
              }

              // chatMessage.fetchGroup = function(){
              	
              	
              // 		$http.post('/pizza/findchatGroup', {}).then(function (response) {

              //   	return createdGroup
              //   })
              		

                
              // }


             chatMessage.loginUser = function(value){
                $http.post('/pizza/loginUser', value).then(function (response) {
                	console.log("jjjjjjjjjjjj",JSON.stringify(response))
                	
                })
              }

            chatMessage.getUserInfo = function(){
            	if($window.localStorage['loginUser']){
            		var userDetails = JSON.parse($window.localStorage['loginUser']);
            	return userDetails;
            }else{
            	return {};
            }
            	
            }
              
            chatMessage.sendmessage = function(value){
                $http.post('/pizza/sendmessage', value).then(function (response) {
                 $window.localStorage['allmessage'] =JSON.stringify(response);
                  console.log("ldldldldldldlddl",JSON.stringify(response));
                 return response;
              }) 
            }
          

            
           

            return chatMessage;
        });
