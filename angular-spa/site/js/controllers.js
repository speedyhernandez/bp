/*globals window*/
(function () {
    'use strict';
    angular.module('bpApp.controllers', [])

        .controller('NavController', [ '$http', '$location', '$anchorScroll', function ($http, $location, $anchorScroll) {
            var win = window,
                doc = document,
                nav = this;

            nav.links = [];

            $http.get('js/data/nav-links.json', { cache: true }).success(function (data) {
                nav.links = data;
            });

            nav.isCurrent = function (thePage) {
                return $location.path() === thePage;
            };

            nav.mobitoggle = function (resetFlag) {
                var delayFlag,
                    tgt = doc.getElementById('header'),
                    isOpen = 'mobi-open';

                if (resetFlag) {
                    tgt.classList.remove(isOpen);
                    return;
                }

                if (!delayFlag) {
                    $anchorScroll();
                    delayFlag = true;
                    setTimeout(function () { delayFlag = false; }, 300);

                    if (tgt.classList.contains(isOpen)) {
                        tgt.classList.remove(isOpen);
                    } else {
                        tgt.classList.add(isOpen);
                    }
                }
            };

            doc.getElementById('menu-toggle').addEventListener('click', function () {
                nav.mobitoggle(false);
            }, false);

            doc.getElementById('navlinks').addEventListener('click', function () {
                if (doc.getElementById('header').classList.contains('mobi-open')) {
                    nav.mobitoggle(false);
                }
            }, false);

            win.addEventListener('resize', function () {
                if (win.innerWidth > 479) {
                    nav.mobitoggle(true);
                }
            }, false);
        }]);
}());