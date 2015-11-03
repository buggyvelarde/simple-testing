var chai = require('chai')
var assert = chai.assert
describe('my form', function () {

  var myform

  beforeEach(function() {
    console.log('beforeEach')
    document.write('<form id=\'myform\' >somecontent</form>')
    myform = document.getElementById('myform')
  })

  afterEach(function() {
    console.log('afterEach')
    myform.parentNode.removeChild(myform);
  })


  describe('when logged in as admin', function () {

    beforeEach(function() {
      console.log('   beforeEach1')
    })

    afterEach(function() {
      console.log('   afterEach1')
    })

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

  describe('when logged in as editor', function () {

    beforeEach(function() {
      console.log('   beforeEach2')
      myform.innerHTML('<div id=\'mydiv\' >somecontent</div>')
    })

    afterEach(function() {
      console.log('   afterEach2')
      var mydiv = document.getElementById('mydiv')
      myform.removeChild(mydiv);
    })

    it('test will fail', function () {
      var mydiv = document.getElementById('mydiv')
      assert.isNull(mydiv, 'mydiv should be present')
    })

  })


})
