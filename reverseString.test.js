const reverseString = require('./reverseString');

test('reverses simple string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverses string with spaces', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('reverses string with spaces and punctuation', () => {
  expect(reverseString('hello world!!')).toBe('!!dlrow olleh');
});
