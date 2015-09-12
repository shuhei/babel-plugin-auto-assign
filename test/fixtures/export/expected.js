'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Hello = (function () {
  function Hello(foo, bar, baz) {
    _classCallCheck(this, _Hello);

    this.foo = foo;
    this.bar = bar;
    this.baz = baz;

    console.log('hello');
  }

  var _Hello = Hello;
  return Hello;
})();

exports['default'] = Hello;
module.exports = exports['default'];
