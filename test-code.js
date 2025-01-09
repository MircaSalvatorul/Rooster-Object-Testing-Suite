const assert = require('assert');
const rooster = require('../index');

describe('rooster', () =>{
  describe('.announceDawn', () =>{
    it('returns a rooster call', () =>{
      const expected = 'cock-a-doodle-doo!';

      const incoming = rooster.announceDawn();

      assert.strictEqual(incoming,expected);
    })
  })
  describe('.timeAtDawn', () =>{
    it('returns its argument as a string', () =>{
      const time = '20';

      const result = rooster.timeAtDawn(24);

      assert.strictEqual(result,time);
    })
    it('throws an error if passed a number less than 0', () =>{
      const time = -5;

      assert.throws(
  () => {
     Rooster.timeAtDawn(time);
  },
  RangeError
);
    })
    it('throws an error if passed a number greater than 23', () =>{
      const time = 24;
      assert.throws(
  () => {
     Rooster.timeAtDawn(time);
  },
  RangeError
);
    })
  })
})