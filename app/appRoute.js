angular.module('app').config(function($stateProvider,$urlRouterProvider) {
    
    $stateProvider
    .state('home', {
        url: '/home',
        abstract: true,
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
    })
    .state('home.search', {
        url: '/search',
        templateUrl: 'app/search/search.html',
        controller: 'SearchCtrl'
    })
    .state('home.detail', {
        url: '/detail/{id}',
        templateUrl: 'app/detail/detail.html',
    })
    .state('home.like', {
        url: '/like',
        templateUrl: 'app/like/like.html'
    })   
    .state('home.history', {
        url: '/history',
        templateUrl: 'app/history/history.html'
    });

    $urlRouterProvider.otherwise('/home/search');
});