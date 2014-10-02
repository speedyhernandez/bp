/*global define, console, requirejs, require, Modernizr*/
requirejs.config({
    baseUrl: 'js',
    paths: {
        'requireLib': 'lib/require',
        'domReady': 'lib/require/domReady'
    }
});

define('modernizr', [], Modernizr);

require(
    [
        'domReady!',
        'app/globals',
        'app/logger',
        'app/top',
        'app/primeEventListener',
        'modernizr'
    ]
);