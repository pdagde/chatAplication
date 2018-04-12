
angular.module('appHome',['pizzaHutCodeCtrl'])
    .config(function($stateProvider) {
        $stateProvider

            .state('app.pizza', {
                url: "/pizza",
                templateUrl: "modules/home/template/pizza.html",
                controller : "pizzaCtrl"
            })
            .state('app.login', {
                url: "/login",
                templateUrl: "modules/home/template/login.html",
                controller : "pizzaCtrl"
            })
            
            .state('app.chatlogin', {
                url: "/chatlogin",
                templateUrl: "modules/home/template/chatlogin.html",
                controller : "pizzaCtrl"
            })
           

// /Users/crive/Documents/assignments/pizzaHut/client/modules/home/template/chatlogin.html

    });
