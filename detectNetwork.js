// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var prefixArr = [];
  var visaCardDeterminer = ['4903', '4905', '4911', '4936'];
  var splitCardNum = cardNumber.split('');
  var length = cardNumber.length;
  for(var i = 0; i < splitCardNum.length; i++) {
    prefixArr.push(Number(splitCardNum[i]));
  }

  if(prefixArr[0] === 3 && prefixArr[1] === 8 && length === 14) {
    return 'Diner\'s Club';
  } else if(prefixArr[0] === 3 && prefixArr[1] === 9 && length === 14) {
    return 'Diner\'s Club';
  } else if(prefixArr[0] === 3 && prefixArr[1] === 4 && length === 15) {
    return 'American Express';
  } else if(prefixArr[0] === 3 && prefixArr[1] === 7 && length === 15) {
    return 'American Express';
  } else if ((visaCardDeterminer.indexOf(cardNumber.toString().substring(0,4)) === -1) && (prefixArr[0] === 4)){
      if (length === 13 || length === 16 || length === 19) {
     return 'Visa';
    }
  } else if(prefixArr[0] === 5 && prefixArr[1] === 1 && length === 16) {
    return 'MasterCard';
  } else if(prefixArr[0] === 5 && prefixArr[1] === 2 && length === 16) {
    return 'MasterCard';
  } else if(prefixArr[0] === 5 && prefixArr[1] === 3 && length === 16) {
    return 'MasterCard';
  } else if(prefixArr[0] === 5 && prefixArr[1] === 4 && length === 16) {
    return 'MasterCard';
  } else if(prefixArr[0] === 5 && prefixArr[1] === 5 && length === 16) {
    return 'MasterCard';
  } else if(prefixArr[0] === 6 && prefixArr[1] === 0 && prefixArr[2] === 1 && prefixArr[3] === 1 && (length === 16 || length === 19)) {
    return 'Discover';
  } else if(prefixArr[0] === 6 && prefixArr[1] === 5 && (length === 16 || length === 19)) {
    return 'Discover';
  } else if (rangeFinder(prefixArr) && (length === 16 || length === 19)) {
    return 'Discover';
  } else if (rangeFinder2(prefixArr) && (lengthMatcher(length))) {
    return 'Maestro';
  } else if (rangeFinderForChinaUnionPay(prefixArr) && (lengthMatcherForChinaUnionPay(length))) {
    return 'China UnionPay';
  } else if (rangFinderForSwitch(prefixArr) && (lengthMatcherForSwitch(length))) {
    return 'Switch';
  } else {
    return 'not a valid Card Number';
  }
};

function rangeFinder(arr) {
  var isValid = false;
  var prefixDeterminerArr = [];
  for(var i = 0; i < 3; i++) {
    prefixDeterminerArr.push(arr[i]);
  }
  var possibliltyArr = [[6, 4, 4], [6, 4, 5], [6, 4, 6], [6, 4, 7], [6, 4, 8], [6, 4, 9]];
    for(var k = 0; k < possibliltyArr.length; k++) {
       if(arrayMatcher(prefixDeterminerArr, possibliltyArr[k])) {
        isValid = true;
      }
    }
  return isValid;
}

function arrayMatcher(arr1, arr2) {
  return arr1.join('') === arr2.join('') ;
}

function rangeFinder2(arr) {
  var isValid = false;
  var prefixDeterminerArr = [];
  for(var i = 0; i <= 3; i++) {
    prefixDeterminerArr.push(arr[i]);
  }
  var possibliltyArr = [[5, 0, 1, 8], [5, 0, 2, 0], [5, 0, 3, 8], [6, 3, 0, 4]];
    for(var k = 0; k < possibliltyArr.length; k++) {
       if(arrayMatcher(prefixDeterminerArr, possibliltyArr[k])) {
        isValid = true;
      }
    }
  return isValid;
}

function lengthMatcher(num) {
  var isValid = false;
  var arr = [12, 13, 14, 15, 16, 17, 18, 19];
   arr.forEach(function(item){
    if(item === num) {
      isValid = true;
    }
  });
  return isValid;
}

function rangeFinderForChinaUnionPay(arr) {
  var isValid = false;
  var tempArr = [];
  var prefix1 = 622;
  var prefix21 = 624;
  var prefix22 = 625;
  var prefix23 = 626;
  var prefix3 = 628;

  for(var i = 0; i <= 2; i++) {
    tempArr.push(arr[i]);
  }

  if(arrayMatcher(tempArr, prefix1.toString().split(''))) {
    var prefixOfSixDigitsArr = [];
    for(var j = 0; j <= 5 ; j++) {
      prefixOfSixDigitsArr.push(arr[j]);
    }

    for(var k = 622126; k <= 622925; k++) {
      if(arrayMatcher(prefixOfSixDigitsArr, k.toString().split(''))) {
        isValid = true;
      }
    }

  } else if(arrayMatcher(tempArr, prefix3.toString().split(''))) {
    var prefixOfFourDigitsArr = [];
    for(var l = 0; l <= 3; l++) {
      prefixOfFourDigitsArr.push(arr[l]);
    }

    for(var m = 6282; m <= 6288; m++) {
      if(arrayMatcher(prefixOfFourDigitsArr, m.toString().split(''))) {
        isValid = true;
      }
    }

  } else if(arrayMatcher(tempArr, prefix21.toString().split(''))) {
    isValid = true;

  } else if(arrayMatcher(tempArr, prefix22.toString().split(''))) {
    isValid = true;

  } else if(arrayMatcher(tempArr, prefix23.toString().split(''))) {
    isValid = true;
  }
  return isValid;
}

function lengthMatcherForChinaUnionPay(num) {
  var isValid = false;
  var arr = [16, 17, 18, 19];
   arr.forEach(function(item){
    if(item === num) {
      isValid = true;
    }
  });
  return isValid;
}

function rangFinderForSwitch(arr) {
  var isValid = false;
  var tempArr = [];
  for(var i = 0; i < 2; i++) {
    tempArr.push(arr[i]);
  }
  var prefix1 = 49;
  var prefix2 = 56;
  var prefix3 = 63;
  var prefix4 = 67;
  if(arrayMatcher(tempArr, prefix1.toString().split(''))) {
    var fortyNinePrefixArr = [];
    for(var j = 0; j < 4; j++) {
      fortyNinePrefixArr.push(arr[j]);
    }
    var fortyNinePrefixArr1 =[4903, 4905, 4911, 4936];
    for(var k = 0; k < fortyNinePrefixArr1.length; k++) {
      if(arrayMatcher(fortyNinePrefixArr, fortyNinePrefixArr1[k].toString().split())) {
        isValid = true;
      }
    }
  } else if(arrayMatcher(tempArr, prefix2.toString().split(''))) {
    var prefix = 564182;
    var fiftySixPrefixArr2 = [];
    for(var l = 0; l < 6; l++) {
      fiftySixPrefixArr2.push(arr[l]);
    }
    if(arrayMatcher(prefix.toString().split(''), fiftySixPrefixArr2)) {
      isValid = true;
    }
  } else if(arrayMatcher(tempArr, prefix3.toString().split(''))) {
    var prefixed = 6333;
    var prefixed2 = 633110;
    var sixtyThreePrefixArr = [];
    var sixtyThreePrefixArr2 = [];
    for(var m = 0; m < 4; m++) {
      sixtyThreePrefixArr.push(arr[m]);
    }
    for(var n = 0; n < 6; n++) {
      sixtyThreePrefixArr2.push(arr[n]);
    }
    if(arrayMatcher(prefixed.toString().split(''), sixtyThreePrefixArr)) {
      isValid = true;
    } else if (arrayMatcher(prefixed2.toString().split(''), sixtyThreePrefixArr2)) {
      isValid = true;
    }
  } else if(arrayMatcher(tempArr, prefix4.toString().split(''))) {
    var prefixed1 = 6759;
    var sixtySevenPrefixArr = [];
    for(var a = 0; a < 4; a++) {
      sixtySevenPrefixArr.push(arr[a]);
    }
    if(arrayMatcher(prefixed1.toString().split(''), sixtySevenPrefixArr)) {
      isValid = true;
    }
  }
  return isValid;
}

function lengthMatcherForSwitch(num) {
  var isValid = false;
  var arr = [16, 18, 19];
   arr.forEach(function(item){
    if(item === num) {
      isValid = true;
    }
  });
  return isValid;
}
