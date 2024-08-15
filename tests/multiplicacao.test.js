import { multiplicacao } from '../src/js/multiplicacao'

test('multiplicação 10 * 2 para igualar 20', () => {
    expect(multiplicacao(10,2)).toBe(20);
})

test('multiplicação 3 * 4 para igualar 12', () => {
    expect(multiplicacao(3, 4)).toBe(12);
});

test('multiplicação 5 * 5 para igualar 25', () => {
    expect(multiplicacao(5, 5)).toBe(25);
});

test('multiplicação 6 * 7 para igualar 42', () => {
    expect(multiplicacao(6, 7)).toBe(42);
});

test('multiplicação 8 * 2 para igualar 16', () => {
    expect(multiplicacao(8, 2)).toBe(16);
});

test('multiplicação 9 * 3 para igualar 27', () => {
    expect(multiplicacao(9, 3)).toBe(27);
});

test('multiplicação 7 * 7 para igualar 49', () => {
    expect(multiplicacao(7, 7)).toBe(49);
});

test('multiplicação 12 * 4 para igualar 48', () => {
    expect(multiplicacao(12, 4)).toBe(48);
});

test('multiplicação 15 * 3 para igualar 45', () => {
    expect(multiplicacao(15, 3)).toBe(45);
});

test('multiplicação 11 * 6 para igualar 66', () => {
    expect(multiplicacao(11, 6)).toBe(66);
});

test('multiplicação 20 * 2 para igualar 40', () => {
    expect(multiplicacao(20, 2)).toBe(40);
});
