function calculator(x, y, operator) {
  switch (operator) {
    case 'add':
      return x + y;
    case 'subtract':
      return x - y;
    case 'multiply':
      return x * y;
    case 'divide':
      return x / y;
  }
}
module.exports = calculator;
