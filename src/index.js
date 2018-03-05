module.exports = function getZerosCount(number, base) {
  var zeros = 0;
  var dividers = primeFactorization(base);
  base = dividers[0];
  var power = dividers.length;
  var i = 2;
  
  while (number >= base) {
    number = Math.floor(number / base);
    zeros += number;
  }
  return Math.floor(zeros / power);
}

function primeFactorization(number) {
  var i = 2;
  var maxDivider = 2;
  var dividers = [];

  while (i <= number) {
    if (number % i == 0) {
      if (i > 2) {
        maxDivider = i;
      }
    dividers.push(i);
    number /= i;
  }
    else {
      i++;
    }
  }

  var maxDividers = dividers.filter(divider => divider == maxDivider);
  var minDividers = dividers.filter(divider => divider == 2);

  if (minDividers.length >= Math.pow(maxDivider, maxDividers.length)) {
    return minDividers;
  } else {
    return maxDividers;
  }
}