function calculator(x, y, operator) {
  if (typeof x === 'number' && typeof y === 'number') {
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
  return 'ERROR: at least one operand is not in the right format';
}
module.exports = calculator;
