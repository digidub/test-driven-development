const reverseString = require('./reverseString');

test('reverses simple string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
