/*globals angular*/
(function () {
    'use strict';
    angular.module('bpApp.directives', [])

        .directive('navContent', function () {
            return {
                restrict: 'A',
                replace: true,
                templateUrl: 'templates/nav.html',
                controller: 'NavController',
                controllerAs: 'navCtrl'
            };
        })

        .directive('headerContent', function () {
            return {
                restrict: 'A',
                replace: true,
                templateUrl: 'templates/header.html'
            };
        })

        .directive('footerContent', function () {
            return {
                restrict: 'A',
                replace: true,
                templateUrl: 'templates/footer.html'
            };
        });
}());