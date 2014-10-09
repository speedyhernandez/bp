/*globals define*/
define(function (require) {
    'use strict';
    var $ = require('jquery'),
        lib = require('./lib');

    $('body').on('click', function (e) {

        var aMethod = e.target.getAttribute('data-method');

        if (aMethod && lib[aMethod] !== undefined) {
            lib[aMethod](e);
        }

        e.stopPropagation();
    });
});