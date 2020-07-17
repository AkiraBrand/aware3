var assert = require('chai').assert;
var Church = requre('./church.js');

describe('Church', function()) {
  it('has attributes', function() {
    var church = new Church('Catholic');

    assert.equal(church.denomination, 'Catholic');
  });
});
