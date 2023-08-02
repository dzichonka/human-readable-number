module.exports = function toReadable(number) {
  const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundreds = Math.trunc(number / 100);
  const tens = Math.trunc((number - (hundreds * 100)) / 10);
  const ones = Math.trunc(number - (hundreds * 100) - (tens * 10));

  if (number >= 0 && number < 1000 && number === Math.abs(number)) {
    let result = '';

    if (number >= 0 && number <= 20) {
      return result + arr[number];
    }

    if (hundreds >= 1) {
      result = `${arr[hundreds]} hundred`;
      if (ones === 0 && tens === 0) {
        return result;
      }
      result = result + ' ';
      if (tens === 0) {
        return `${result}${arr[ones]}`;
      }
      if (tens === 1) {
        return `${result}${arr[10 + ones]}`;
      }
    }
    if (tens >= 2 && tens <= 9) {
      result = `${result}${arr[18 + tens]}`;
      if (ones === 0) {
        return result;
      }
      result = `${result} ${arr[ones]}`;
    }

    return result;
  } else {
    return "Please, enter an integer from 0 to 999";
  }
};
