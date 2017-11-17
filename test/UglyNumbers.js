var UglyNumbers = require('../array/algo/UglyNumbers').UglyNumbers;
var expect  = require('chai').expect;


it('Nth Ugly Number', function(done) {
  var u = new UglyNumbers();
  var nthUglyNumber = u.getNthUglyNo(12);
  expect(nthUglyNumber).to.equal(16);
  done();
});