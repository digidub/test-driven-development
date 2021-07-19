const capitalize = require('./capitalize');

test('capitalises word', () => {
  expect(capitalize('hello')).toBe('Hello');
});
