//Define an angular module for our app

angular.module('sampleApp', ['ngRoute', 'RouteControllers']);
 
angular.module('sampleApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: "HomeController"
    })
    .when('/Fixtures and Results', {
        templateUrl: 'templates/fixt.html',
        controller: "HomeController"
    })
    .when('/Ticket Info', {
        templateUrl: 'templates/ticket.html',
        controller: "HomeController"
    })
    .when('/Fan Articles', {
        templateUrl: 'templates/fanart.html',
        controller: "HomeController"
    })
     .when('/log in', {
        templateUrl: 'templates/login.html',
        controller: "loginController"
    });
});