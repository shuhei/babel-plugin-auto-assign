'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var Hello = (function () {
  function Hello(foo, bar, baz) {
    babelHelpers.classCallCheck(this, _Hello);
    this.foo = foo;
    this.bar = bar;
    this.baz = baz;

    console.log('hello');
  }

  babelHelpers.createClass(Hello, [{
    key: 'say',
    value: function say() {
      return 'hello';
    }
  }]);
  var _Hello = Hello;
  return Hello;
})();

exports['default'] = Hello;
module.exports = exports['default'];
