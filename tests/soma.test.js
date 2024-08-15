import { soma } from '../src/js/soma'

test('soma 1 + 2 para igualar 3', () => {
    expect(soma(1,2)).toBe(3);
})

test('soma 2 + 3 para igualar 5', () => {
    expect(soma(2, 3)).toBe(5);
});

test('soma 4 + 6 para igualar 10', () => {
    expect(soma(4, 6)).toBe(10);
});

test('soma 7 + 8 para igualar 15', () => {
    expect(soma(7, 8)).toBe(15);
});

test('soma 0 + 5 para igualar 5', () => {
    expect(soma(0, 5)).toBe(5);
});

test('soma 9 + 11 para igualar 20', () => {
    expect(soma(9, 11)).toBe(20);
});

test('soma 15 + 10 para igualar 25', () => {
    expect(soma(15, 10)).toBe(25);
});

test('soma 14 + 16 para igualar 30', () => {
    expect(soma(14, 16)).toBe(30);
});

test('soma 20 + 5 para igualar 25', () => {
    expect(soma(20, 5)).toBe(25);
});

test('soma 13 + 17 para igualar 30', () => {
    expect(soma(13, 17)).toBe(30);
});

test('soma 18 + 22 para igualar 40', () => {
    expect(soma(18, 22)).toBe(40);
});
