/**
 * Created by msp on 2016/11/5.
 */
var myApp = angular.module("TianYa");
myApp.config(function($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.when("","/tabs/favorite");

    $stateProvider
        .state("favorite",{
            parent:'tabs',
            url:"/favorite",
            views: {
                'search-tab': {
                    templateUrl: "./modules/Favorite/favorite.html",
                    controller:'FavoriteController as vm',

                }
            }
        });
});