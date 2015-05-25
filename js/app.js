'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');
app.constant('pageSize', 5);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: "templates/public-screen/home.html",
        controller: "HomeController"
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/public-screen/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/public-screen/register.html',
        controller: 'RegisterController'
    });
});

app.run('/');

