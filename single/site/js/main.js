/*globals requirejs, require*/
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    }
});

require(['app/singleEventListener'], function (main) {
    'use strict';
    require(['app/index']);
});