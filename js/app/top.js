/*global globalMethodObj, console, define, win, doc, theBody*/
var scrollBaseElement;

if (win.mozInnerScreenX || document.documentMode) {
    // IE or FF
    scrollBaseElement = doc.getElementsByTagName('html')[0];
} else {
    scrollBaseElement = theBody;
}

globalMethodObj.toTop = function (e) {
    'use strict';

    scrollBaseElement.scrollTop = 0;
};