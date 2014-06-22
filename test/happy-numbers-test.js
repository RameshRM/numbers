var expector = require('chai').expect;

var happy = require('../lib/happy-numbers');
var isHappy ;

describe('ishappy', function() {
    it('should return true when passed the params (1)', function() {
        isHappy = happy.isHappyNumber(1);
        expector(isHappy).to.equal(true);
    });
});


describe('ishappy-proto', function() {
    it('should return true when passed the params (1)', function() {
        var seven = Number(7);
        expector(seven.ishappy()).to.equal(true);
    });

    it('should return false when passed the params (2)', function() {
        var two = Number(2);
        expector(two.ishappy()).to.equal(false);
    });

});
