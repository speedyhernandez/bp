/*globals angular*/
(function () {
    'use strict';
    angular.module('bpApp.directives', [])

        .directive('navContent', function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/nav.html',
                controller: 'NavController',
                controllerAs: 'navCtrl'
            };
        })

        .directive('headerContent', function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/header.html'
            };
        })

        .directive('footerContent', function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/footer.html'
            };
        });
}());