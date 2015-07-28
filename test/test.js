var should = require('should');
require('../round10').polyfill();

describe('Math', function() {
    it('should have #round10', function() {
        // Round
        Math.round10(55.55, -1).should.equal(55.6);
        Math.round10(55.549, -1).should.equal(55.5);
        Math.round10(55, 1).should.equal(60);
        Math.round10(54.9, 1).should.equal(50);
        Math.round10(-55.55, -1).should.equal(-55.5);
        Math.round10(-55.551, -1).should.equal(-55.6);
        Math.round10(-55, 1).should.equal(-50);
        Math.round10(-55.1, 1).should.equal(-60);
        Math.round10(1.005, -2).should.equal(1.01);
    });
    it('should have #floor10', function() {
        // Floor
        Math.floor10(55.59, -1).should.equal(55.5);
        Math.floor10(59, 1).should.equal(50);
        Math.floor10(-55.51, -1).should.equal(-55.6);
        Math.floor10(-51, 1).should.equal(-60);
    });
    it('should have #ceil10', function() {
        // Ceil
        Math.ceil10(55.51, -1).should.equal(55.6);
        Math.ceil10(51, 1).should.equal(60);
        Math.ceil10(-55.59, -1).should.equal(-55.5);
        Math.ceil10(-59, 1).should.equal(-50);
    });
});
