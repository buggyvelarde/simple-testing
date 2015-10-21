var chai = require('chai')
var assert = chai.assert
describe('Array', function () {
  describe('#indexOf()', function () {
    it('test will pass', function () {
      assert.equal(-1, [1, 2, 3].indexOf(5))
    })
    it('test will fail', function () {
      var expected = [1, 1, 2, 3, 5]
      var fib = require('../src/some_code').fib
      expected.map(function(e, i) {
        assert.equal(fib(i), e)
      })
    })
  })
})
