/**
 * Created by Pravin on 29/03/2018.
 */

'use strict';

var App = angular.module('chat_rooms',['ui.router','appIndex']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
				$urlRouterProvider.otherwise("/app/pizza");
				
				$stateProvider  
                    .state('app', {
                        url: "/app",
                        abstract: true
                    })
                    
			}]);

