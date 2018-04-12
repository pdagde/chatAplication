
'use strict';

var App = angular.module('chat_rooms',['ui.router','appIndex']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
				$urlRouterProvider.otherwise("/app/chatRoom");
				
				$stateProvider  
                    .state('app', {
                        url: "/app",
                        abstract: true
                    })
                    
			}]);

