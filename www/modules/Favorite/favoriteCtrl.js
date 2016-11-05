/**
 * Created by msp on 2016/11/5.
 */
angular.module('TianYa').controller('FavoriteController', FavoriteController);

FavoriteController.inject = [
    '$rootScope',
    '$scope',
    '$http',
  //  'DataSvc',
  //  'AppInfoSvc'

];
function FavoriteController($rootScope, $scope, $http) {
    console.log('Favorite');
};