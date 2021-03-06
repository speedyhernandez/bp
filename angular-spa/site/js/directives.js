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
                scope: {
                    copyText: '@'
                },
                templateUrl: 'templates/footer.html'
            };
        })

        .directive('customUrl', function () {
            return {
                restrict: 'A',
                replace: true,
                scope: {
                    urlText: '@'
                },
                templateUrl: 'templates/customUrl.html'
            };
        });
}());