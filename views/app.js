angular.module('tinsel', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.when('', '/');


        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/views/home/home.html'
            })

            .state('about', {
              url: '/about',
              templateUrl: '/views/about/about.html'
            })

    });
