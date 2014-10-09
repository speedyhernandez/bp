/*globals require, define, win*/
require(['app/globals']);

define(function () {
    'use strict';

    return {
        scroller: function (e) {
            e.preventDefault();

            win.body.scrollTop = 0;
        }
    };
});