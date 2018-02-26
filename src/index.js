module.exports = function getZerosCount(number, base) {
  zeros = 0;
  let i = 2;
  while (i < base) {
    if (base % i == 0) {
      base /= i;
    }
    else {
      i++;
    }
  }

  while (number >= base) {
    number = Math.floor(number / base);
    zeros += number;
  }
  return zeros;
}