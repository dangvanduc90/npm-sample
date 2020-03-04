// "use strict";

let Sm = require('./lib/core/Sm');

// ;(function (global, factory) {
//     typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
//         typeof define === 'function' && define.amd ? define(factory) :
//             global.moment = factory()
// }(this, (function () { 'use strict';
//     let sm = new Sm();
//
//     var now = function () {
//         return Date.now ? Date.now() : +(new Date());
//     };
//     sm.now = now;
//     return sm;
// })));


let sm = new Sm();

Sm.prototype.round = function round() {
    return 'rounded';
};

module.exports = sm;