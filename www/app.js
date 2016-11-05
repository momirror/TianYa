var myApp = angular.module("TianYa",['ionic','TianYa.service']);


myApp.config(function($stateProvider,$urlRouterProvider)
{
	$urlRouterProvider.when("","/tabs/favorite");
	
	$stateProvider
	.state("tabs",
	{
		url:"/tabs",
		templateUrl:"./modules/tabs/tabs.html",
	})
});

//定义模块
angular.module('TianYa.service',[]);