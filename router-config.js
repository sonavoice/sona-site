(function() {
  'use strict';


  angular.module('app')
  .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
        data: {
          title: 'Home'
        }
      })
      .state('extensions', {
        url: '/extensions',
        templateUrl: 'extensions/extensions.html',
        controller: 'ExtensionsCtrl',
        controllerAs: 'extensions',
        data: {
          title: 'Extensions'
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        data: {
          title: 'About'
        }
      })
      .state('developers', {
        url: '/developers',
        templateUrl: 'developers/developers.html',
        controller: 'DevelopersCtrl',
        controllerAs: 'developers',
        data: {
          title: 'Developers'
        }
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'contact/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact',
        data: {
          title: 'Contact'
        }
      });

  }
})();