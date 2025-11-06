const assert = require('assert');
const { sum } = require('../dist/index.js');

assert.strictEqual(sum(1, 2), 3, 'sum(1,2) should be 3');
console.log('All tests passed');