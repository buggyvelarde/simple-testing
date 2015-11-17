var chai = require('chai')
var assert = chai.assert

var data = require('./fixtures/mydata')
var formHtml = require('./fixtures/myform.html')

describe('my form', function () {
  var myform

  beforeEach(function () {
    console.log('beforeEach')
    console.log(data)
    document.body.innerHTML += formHtml
    myform = document.getElementById('myform')
  })

  afterEach(function () {
    console.log('afterEach')
    myform.parentNode.removeChild(myform)
  })

  describe('when logged in as admin', function () {
    beforeEach(function () {
      console.log('   beforeEach1')
    })

    afterEach(function () {
      console.log('   afterEach1')
    })

    it('test will pass', function () {
      assert.equal(-1, [1, 2, 3].indexOf(5))
    })

    it('test will fail', function () {
      var expected = [1, 1, 2, 3, 5]
      var fib = require('../src/some_code').fib
      expected.map(function (e, i) {
        assert.equal(fib(i), e)
      })
    })
  })

  describe('when logged in as editor', function () {
    beforeEach(function () {
      console.log('   beforeEach2')
      myform.innerHTML = '<div id=\'mydiv\' >somecontent</div>'
    })

    afterEach(function () {
      console.log('   afterEach2')
      var mydiv = document.getElementById('mydiv')
      myform.removeChild(mydiv)
    })

    it('test for the presence of the div', function () {
      var mydiv = document.getElementById('mydiv')
      assert.isNotNull(mydiv, 'mydiv should be present')
    })
  })
})
