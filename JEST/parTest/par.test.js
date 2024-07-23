
const isEven = require('./par');

test('verifica se 2 é par', () => {
  expect(isEven(2)).toBe(true);
});

test('verifica se 3 é ímpar', () => {
  expect(isEven(3)).toBe(false);
});

test('verifica se 0 é par', () => {
  expect(isEven(0)).toBe(true);
});

test('verifica se -4 é par', () => {
  expect(isEven(-4)).toBe(true);
});
