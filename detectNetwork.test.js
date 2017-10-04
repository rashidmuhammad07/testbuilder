/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  /*it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });
*/
  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('3934567890123') === 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.should();

  it('has prefix of 51 and length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });

  it('has prefix of 52 and length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });

  it('has prefix of 53 and length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  //var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var randomStr = '1234567890123456789';
  for(var length = 16; length <= 19; length += 3) {
    (function(length) {
      it('has a prefix of 6011 and a length of ' + length, function() {
        detectNetwork('6011' + randomStr.slice(0, length - 4)).should.equal('Discover');
      });
    })(length);
  }

  for(var len = 16; len <= 19; len += 3){
    (function(len) {
      it('has a prefix of 65 and a length of ' + len, function() {
        detectNetwork('65' + randomStr.slice(0, len - 2)).should.equal('Discover');
      });
    })(len);
  }

  for(var lent = 16; lent <= 19; lent += 3) {
    for(var prefix = 644; prefix <= 649; prefix++) {
      (function(lent, prefix){
        it('has a prefix of ' + prefix + ' and a length of ' + lent, function() {
          detectNetwork(prefix.toString() + randomStr.slice(0, lent - 3)).should.equal('Discover');
        });
      })(lent, prefix);
    }
  }
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var should = chai.should();
  var randomStr = '1234567890123456';

  for(var length = 12; length <= 19; length++) {
    (function(length){
      it('has a prefix of 5018 and length of ' + length, function() {
        detectNetwork('5018' + randomStr.slice(0,length - 4)).should.equal('Maestro');
      });

     it('has a prefix of 5020 and length of ' + length , function() {
      detectNetwork('5020' + randomStr.slice(0, length - 4)).should.equal('Maestro');
     });

     it('has a prefix of 5038 and length of ' + length , function() {
      detectNetwork('5038' + randomStr.slice(0,length - 4)).should.equal('Maestro');
     });

     it('has a prefix of 6304 and length of ' + length , function() {
      detectNetwork('6304' + randomStr.slice(0,length - 4)).should.equal('Maestro');
     });
   })(length);
  }
});

describe('should support China UnionPay', function (){
  var randomStr = '1234567890123456789';
  for(var length = 16 ; length <= 19; length++) {
    for(var prefix = 622126; prefix <= 622925; prefix++) {
      (function(length, prefix){
        it('has a prefix ' + prefix + ' and length of ' + length, function(){
          detectNetwork(prefix.toString() + randomStr.slice(0, length - 6 )).should.equal('China UnionPay');
        });
      })(length, prefix);
    }

    for(var prefix2 = 624; prefix2 <= 626; prefix2++) {
      (function(length, prefix2){
        it('has prefix ' + prefix2 + ' and length of ' + length, function() {
          detectNetwork(prefix2.toString() + randomStr.slice(0, length - 3)).should.equal('China UnionPay');
        });
      })(length, prefix2);
    }

    for(var prefix3 = 6282; prefix3 <= 6288; prefix3++) {
      (function(length, prefix3){
        it('has a prefix ' + prefix3 + ' and length of ' + length, function(){
          detectNetwork(prefix3.toString() + randomStr.slice(0, length - 4)).should.equal('China UnionPay');
        });
      })(length, prefix3);
    }
  }
});

describe('should support Switch', function(){
  var randomStr = '1234567890123456789';
  var allSixDigitPrefixes = [564182, 633110];
  var allFourDigitPrefixes = [4903, 4905, 4911, 4936, 6333, 6759];
  var totalLength = [16, 18, 19];
  for(var i = 0 ; i < totalLength.length; i++) {
    for(var j = 0; j < allFourDigitPrefixes.length; j++) {
      (function(prefix, length){
        it('has a prefix ' + prefix + ' and a length of ' + length, function(){
          detectNetwork(prefix.toString() + randomStr.slice(0, length - 4)).should.equal('Switch');
        });
      })(allFourDigitPrefixes[j], totalLength[i]);
    }

    for(var k = 0; k < allSixDigitPrefixes.length; k++) {
      (function(pre, length){
        it('has a prefix ' + pre + ' and a length of ' + length, function(){
          detectNetwork(pre.toString() + randomStr.slice(0, length - 6)).should.equal('Switch');
        });
      })(allSixDigitPrefixes[k], totalLength[i]);
    }
  }
});
