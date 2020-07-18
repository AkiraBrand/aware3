var assert = require('chai').assert;
var Church = require('../lib/church.js');

describe('Church', function() {

  it('exists', function() {
    assert.isFunction(Church)
  });

  it('has attributes', function(){
    var church = new Church('Catholic', 100, true, ["guitar"]);

    assert.equal(church.denomination, 'Catholic');
    assert.equal(church.congregationSize, 100);
    assert.equal(church.isOpen, true);
    assert.equal(church.worshipBand, "guitar");
  });

});
