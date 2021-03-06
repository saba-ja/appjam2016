// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngJustGage','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller:'homeCtrl'
      }
    }

  })
  .state('app.vehicle', {
    url: '/vehicle',
    views: {
      'menuContent': {
        templateUrl: 'templates/vehicle/list.html',
        controller: 'vehicleListCtrl'
      }
    }
    
  })
  .state('app.vehicle_register_insertvin', {
    url: '/vehicle/register/insertvin',
    views: {
      'menuContent': {
        templateUrl: 'templates/vehicle/insertvin.html',
        controller: 'vehicleListCtrl'
      }
    }
    
  })
  .state('app.vehicle_register2', {
    url: '/vehicle/register/loockupvin/:vin',
    views: {
      'menuContent': {
        templateUrl: 'templates/vehicle/register2.html',
        controller: 'vehicleListCtrl'
      }
    }
    
  })
  .state('app.payment', {
    url: '/payment',
    views: {
      'menuContent': {
        templateUrl: 'templates/payment/paymentlist.html',
        controller: 'paymentListCtrl'
      }
    }
    
  })
  .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map/googlemap.html',
        controller: 'MapCtrl'
      }
    }
    
  })

  .state('app.parkinglist', {
    url: '/parkinglist',
    views: {
      'menuContent': {
        templateUrl: 'templates/parking/parkinglist.html',
        controller: 'parkingListCtrl'
      }
    }
    
  })
  .state('app.scanqr', {
    url: '/scanqr',
    views: {
      'menuContent': {
        templateUrl: 'templates/register/scanqr.html',
        controller: 'registerCtrl'
      }
    }
    
  })
  .state('app.scanqrMoretime', {
    url: '/scanqr/moretime',
    views: {
      'menuContent': {
        templateUrl: 'templates/register/scanqr.html',
        controller: 'registerCtrl'
      }
    }
    
  })
  $urlRouterProvider.otherwise('/app/home');
});
