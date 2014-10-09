/*globals define*/
define(['jquery'], function ($) {
    'use strict';
    return {
        scroller: function (e) {
            e.preventDefault();

            $('body').animate({
                scrollTop: 0
            }, 500);
        }
    };
});