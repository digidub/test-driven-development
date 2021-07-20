function capitalize(string) {
  const lowerCaseWords = string.split(' ');
  const upperCaseWords = [];
  lowerCaseWords.forEach((word) => {
    upperCaseWords.push(word[0].toUpperCase() + word.substring(1));
  });
  const capitalizedString = upperCaseWords.join(' ');
  return capitalizedString;
}
module.exports = capitalize;
