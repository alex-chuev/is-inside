const assert = require('assert');
const isInside = require('./index');

assert.equal(true, isInside('q', ''));
assert.equal(true, isInside('q', '/'));
assert.equal(true, isInside('/q', '/'));
assert.equal(true, isInside('/q/w/e', '/q/w'));

assert.equal(false, isInside('', ''));
assert.equal(false, isInside('q', 'q'));
assert.equal(false, isInside('/q', '/q'));
assert.equal(false, isInside('/q/w', '/q/w'));
assert.equal(false, isInside('/q/w/', '/q/w'));
assert.equal(false, isInside('/qq', '/q'));
assert.equal(false, isInside('q/e', 'e'));
assert.equal(false, isInside('q/e', 'q/e/q/e'));
assert.equal(false, isInside('q', 'qq'));
assert.equal(false, isInside('qq', 'q'));

console.log('All tests passed.');
