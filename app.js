var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

	$stateProvider.state('/', {
	    url: '/home',
	    templateUrl: 'home.html'
	})
	.state('home', {
	    url: '/home',
	    templateUrl: 'home.html'
	})
	.state('home.list', {
	    url: '/list',
	    templateUrl: 'list.html'
	})
	.state('home.para', {
	    url: '/para',
	    templateUrl: 'para.html'
	})
	.state('about', {
	    url: '/about',
	    templateUrl: 'about.html'
	})

});
routerApp.controller('validateCtrl', function($scope) {
    $scope.user = '';
    $scope.email = '';
});