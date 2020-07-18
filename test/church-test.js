var assert = require('chai').assert;
var deepEql = require("deep-eql");
var Church = require('../lib/church.js');

describe('Church', function() {

  it('exists', function() {
    assert.isFunction(Church)
  });

  it('has attributes', function(){
    var church = new Church('Catholic', 100, true);

    assert.equal(church.denomination, 'Catholic');
    assert.equal(church.congregationSize, 100);
    assert.equal(church.isOpen, true);
    assert.equal(church.worshipBand, []);
  });

  it('can close down', function() {
    var church = new Church('Catholic', 100, true);

    church.closeDown();

    assert.equal(church.isOpen, false);
  });

  it('can add congregants', function() {
    var church = new Church('Catholic', 100, true);

    church.addCongregant();

    assert.equal(church.congregationSize, 101);
  });

  it('can add worship band instruments', function() {
    var church = new Church('Catholic', 100, true);

    church.addWorshipInstruments("piano");

    expect({church.worshipBand})
    assert.deepEqual((church.worshipBand), ["piano"]);
  });


});
