

'use strict';
    angular.module('ChatService', [])

        .factory('ChatService', function ($rootScope,$window,$http) {
           
            var chatMessage = {};
           
           chatMessage.store = function(value){
                $http.post('/chatRoom/createChatGroup', value).then(function (response) {
                   return response;
                })
              }

             chatMessage.loginUser = function(value){
                $http.post('/chatRoom/loginUser', value).then(function (response) { 	
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
                $http.post('/chatRoom/sendmessage', value).then(function (response) {
                 $window.localStorage['allmessage'] =JSON.stringify(response);
                 return response;
              }) 
            }
          
          chatMessage.setActiveUser = function(value){
                $http.post('/chatRoom/setActiveUser', value).then(function (response) {
                   return {}
              }) 
            }

            return chatMessage;
        });
