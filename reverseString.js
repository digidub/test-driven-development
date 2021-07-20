function reverseString(string) {
  const stringArray = string.split('');
  stringArray.reverse();
  const reversedString = stringArray.join('');
  return reversedString;
}
module.exports = reverseString;
