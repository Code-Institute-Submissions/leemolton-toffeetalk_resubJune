//Define an angular module for our app

angular.module('sampleApp', ['ngRoute', 'RouteControllers']);
 
angular.module('sampleApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: "HomeController"
    })
    .when('/fixt', {
        templateUrl: 'templates/fixt.html',
        controller: "HomeController"
    })
    .when('/tickets', {
        templateUrl: 'templates/ticket.html',
        controller: "HomeController"
    })
    .when('/fanart', {
        templateUrl: 'templates/fanart.html',
        controller: "HomeController"
    })
     .when('/contact', {
        templateUrl: 'templates/form-template.html',
        controller: "HomeController"
    })
    .when('/login', {
        templateUrl: 'templates/login.html',
        controller: "loginController" 
    });
});
