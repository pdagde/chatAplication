
angular.module('appHome',['chatRoomCodeCtrl'])
    .config(function($stateProvider) {
        $stateProvider

            .state('app.chatRoom', {
                url: "/chatRoom",
                templateUrl: "modules/home/template/chatRoom.html",
                controller : "chatRoomCtrl"
            })
            .state('app.login', {
                url: "/login",
                templateUrl: "modules/home/template/login.html",
                controller : "chatRoomCtrl"
            })
            
            .state('app.chatlogin', {
                url: "/chatlogin",
                templateUrl: "modules/home/template/chatlogin.html",
                controller : "chatRoomCtrl"
            })
           

    });
