
angular.module('biblio', ['ionic', 'ui.router','ngAnimate','ngMaterial'])
       .config(config)
       .run(run)

config.$inject = ['$stateProvider','$urlRouterProvider'];

function config($stateProvider, $urlProvider) {
  // Any garbage link will go to home
  $urlProvider.otherwise('home');
  $stateProvider
    .state('home',{
      url:'/home',
      templateUrl: 'views/home.html',
      controller:'homeCtrl'
    })
}

run.$inject = ['$ionicPlatform'];
function run($ionicPlatform){
    $ionicPlatform.ready(function() {
        console.log('ionic ready');
    });
}
