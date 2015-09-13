'use strict';

var Hello = (function () {
  function Hello(foo, bar, baz) {
    babelHelpers.classCallCheck(this, Hello);

    console.log('hello');
  }

  babelHelpers.createClass(Hello, [{
    key: 'say',
    value: function say() {
      return 'hello';
    }
  }]);
  return Hello;
})();
