# babel plugin auto assign

A babel plugin that automatically assigns constructor parameters to instance properties.

```js
@autoassign
class Hello {
  constructor(foo, bar, baz) {
  }
}
```

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

```
npm install babel-plugin-auto-assign
```

## Usage

```
babel --optional es7.decorators --plugins auto-assign source.js
```

## License

ISC
