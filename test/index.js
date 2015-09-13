var assert = require('assert');
var fs = require('fs');
var path = require('path');
var babel = require('babel');

function test(fixtureName) {
  it(fixtureName, function () {
    var fixturePath = path.resolve(__dirname, 'fixtures', fixtureName, 'fixture.js');
    var expectedPath = path.resolve(__dirname, 'fixtures', fixtureName, 'expected.js');
    var actual = babel.transformFileSync(fixturePath, {
      optional: ['es7.decorators'],
      plugins: ['../lib'],
      externalHelpers: true
    }).code;
    var expected = fs.readFileSync(expectedPath, { encoding: 'utf8' });
    assert.equal(actual + '\n', expected);
  });
}

[
  'no-decorator',
  'plain',
  'export'
].map(test);
