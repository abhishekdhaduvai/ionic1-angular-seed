
angular.module('biblio', ['ionic', 'ui.router','ngAnimate','ngMaterial'])
       .config(config)
       .run(run)
       .controller('homeCtrl', homeCtrl)


config.$inject = ['$stateProvider','$urlRouterProvider']

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

function run(){
  console.log("App started");
}

homeCtrl.$inject = ['$scope'];

function homeCtrl($scope){

}
