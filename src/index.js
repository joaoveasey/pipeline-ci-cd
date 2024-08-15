import { soma } from  './js/soma.js'
import { divisao } from  './js/divisao.js'
import { multiplicacao } from  './js/multiplicacao.js'
import { subtracao } from  './js/subtracao.js'

document.getElementById('calculateButton').addEventListener('click', () => {
    const numberA = parseFloat(document.getElementById('numberA').value);
    const operation = document.getElementById('operation').value.trim();
    const numberB = parseFloat(document.getElementById('numberB').value);
    let result;

    switch (operation) {
        case '+':
            result = soma(numberA, numberB);
            break;
        case '-':
            result = subtracao(numberA - numberB);
            break;
        case '*':
            result = multiplicacao(numberA * numberB);
            break;
        case '/':
            result = divisao(numberA / numberB);
            break;
        default:
            result = 'Operação inválida!';
    }

    document.getElementById('result').textContent = `Resultado: ${result}`;
});