const soma = require('../src/soma');

test('soma 1 + 2 para igualar 3', () => {
    expect(soma(1,2)).toBe(3);
})

test('soma 2 + 3 para igualar 5', () => {
    expect(soma(2,3)).toBe(5);
})

test('soma 3 + 4 para igualar 7', () => {
    expect(soma(3,4)).toBe(7);
})

test('soma 4 + 5 para igualar 9', () => {
    expect(soma(4,5)).toBe(9);
})

test('soma 5 + 6 para igualar 11', () => {
    expect(soma(5,6)).toBe(11);
})

test('soma 6 + 7 para igualar 13', () => {
    expect(soma(6,7)).toBe(13);
})

test('soma 7 + 8 para igualar 15', () => {
    expect(soma(7,8)).toBe(15);
})

test('soma 8 + 9 para igualar 17', () => {
    expect(soma(8,9)).toBe(17);
})

test('soma 9 + 10 para igualar 19', () => {
    expect(soma(9,10)).toBe(19);
})

test('soma 10 + 11 para igualar 21', () => {
    expect(soma(10,11)).toBe(21);
})