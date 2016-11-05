var myApp = angular.module("TianYa");

myApp.config(function($stateProvider,$urlRouterProvider) {

    $stateProvider
        .state('home', {
            url:'/home',
            templateUrl: './modules/tabs/tabs.html',
            abstract: true,
            controller:'TabsController'
        });
});

