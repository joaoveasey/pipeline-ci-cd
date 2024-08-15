import { subtracao } from '../src/js/subtracao'

test('subtração 2 - 1 para igualar 1', () => {
    expect(subtracao(2,1)).toBe(1);
})

test('subtração 3 - 2 para igualar 1', () => {
    expect(subtracao(3, 2)).toBe(1);
});

test('subtração 5 - 3 para igualar 2', () => {
    expect(subtracao(5, 3)).toBe(2);
});

test('subtração 10 - 4 para igualar 6', () => {
    expect(subtracao(10, 4)).toBe(6);
});

test('subtração 7 - 5 para igualar 2', () => {
    expect(subtracao(7, 5)).toBe(2);
});

test('subtração 9 - 6 para igualar 3', () => {
    expect(subtracao(9, 6)).toBe(3);
});

test('subtração 12 - 7 para igualar 5', () => {
    expect(subtracao(12, 7)).toBe(5);
});

test('subtração 15 - 9 para igualar 6', () => {
    expect(subtracao(15, 9)).toBe(6);
});

test('subtração 20 - 10 para igualar 10', () => {
    expect(subtracao(20, 10)).toBe(10);
});

test('subtração 18 - 11 para igualar 7', () => {
    expect(subtracao(18, 11)).toBe(7);
});

test('subtração 25 - 15 para igualar 10', () => {
    expect(subtracao(25, 15)).toBe(10);
});
