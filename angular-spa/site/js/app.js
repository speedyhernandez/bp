/*globals angular, $*/
(function () {
    'use strict';
    var app = angular.module('bpApp', [
        'ngRoute',
        'bpApp.controllers',
        'bpApp.directives'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html'
            })
            .when('/contact', {
                templateUrl: 'partials/contact.html'
            })
            .otherwise({
                templateUrl: 'partials/404.html'
            });
    }]);
}());