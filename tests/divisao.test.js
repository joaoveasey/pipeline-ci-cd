import { divisao } from '../src/js/divisao'

test('divisão 10 / 2 para igualar 5', () => {
    expect(divisao(10,2)).toBe(5);
})

test('divisão 9 / 3 para igualar 3', () => {
    expect(divisao(9,3)).toBe(3);
})

test('divisão 8 / 4 para igualar 2', () => {
    expect(divisao(8,4)).toBe(2);
})

test('divisão 15 / 3 para igualar 5', () => {
    expect(divisao(15,3)).toBe(5);
})

test('divisão 20 / 5 para igualar 4', () => {
    expect(divisao(20,5)).toBe(4);
})

test('divisão 0 / 1 para igualar 0', () => {
    expect(divisao(0,1)).toBe(0);
})

test('divisão 1 / 0 para lançar erro', () => {
    expect(divisao(1,0)).toBe("Não pode divisão por zero");
})