/*globals requirejs, require*/
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    }
});

require(['jquery', 'app/singleEventListener']);