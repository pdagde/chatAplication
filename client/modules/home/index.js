
angular.module('appHome',['pizzaHutCodeCtrl','loginCodeCtrl'])
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
                controller : "loginCtrl"
            })
            
           


    });
