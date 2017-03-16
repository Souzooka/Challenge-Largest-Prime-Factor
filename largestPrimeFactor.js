exports.largestPrimeFactor = function(n){
  var factors = [];
  var primeFactors = [];
  var primeFactor = false;


  for (let i = 2; i < n / 2 - 1; i += 1) {
    if (n % i === 0) {
      factors.push(i);
    }
  }

  for (let i = 0; i < factors.length; i++) {
    for (var j = factors[i] / 2 - 1; j > 1; j -= 1) {
      if (factors[i] % j === 0) {
        primeFactor = false;
        break;
      }
      primeFactor = true;
    }
    if (primeFactor) {
      primeFactors.push(factors[i]);
    }
  }

  return primeFactors.pop();
};