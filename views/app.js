angular.module('tinsel', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.when('', '/');


        $stateProvider
            .state('home', {
              controller: 'homeCtrl',
                url: '/',
                templateUrl: '/views/home/home.html'
            })

            .state('about', {
                url: '/about',
                templateUrl: '/views/about/about.html'
            })

            .state('services', {
                url: '/services',
                templateUrl: '/views/services/services.html'
            })

            .state('gallery', {
                url: '/gallery',
                templateUrl: '/views/portfolio/gallery.html'
            })

            .state('contact', {
              url: '/contact',
              templateUrl: '/views/contact/contact.html'
            })

    });
