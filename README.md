# [DEPRECATED] babel-plugin-auto-assign

[![npm version](https://img.shields.io/npm/v/babel-plugin-auto-assign.svg)](https://www.npmjs.org/package/babel-plugin-auto-assign)
[![npm downloads](https://img.shields.io/npm/dm/babel-plugin-auto-assign.svg)](https://www.npmjs.org/package/babel-plugin-auto-assign)

**This plugin is no longer maintained, and works only with Babel v5. To use the feature in newer versions of Babel, please check out [jakewhelan/babel-plugin-transform-constructor-self-assign](https://github.com/jakewhelan/babel-plugin-transform-constructor-self-assign)**

---

A babel plugin that automatically assigns constructor parameters to instance properties. Might be convenient for class-based DI like Angular does.

Before:

```js
@autoAssign
class Hello {
  constructor(foo, bar, baz) {
  }
}
```

After:

```js
class Hello {
  constructor(foo, bar, baz) {
    this.foo = foo;
    this.bar = bar;
    this.baz = baz;
  }
}
```

## Installation

```sh
$ npm install babel-plugin-auto-assign
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "optional": ["es7.decorators"],
  "plugins": ["auto-assign"]
}
```

### Via CLI

```sh
$ babel --optional es7.decorators --plugins auto-assgin script.js
```

### Via Node API

```js
require('babel-core').transform('code', {
  optional: ['es7.decorators'],
  plugins: ['auto-assign']
});
```

## License

ISC
