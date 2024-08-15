function divisao(a,b){
    if (b == 0){
        var erro = "Não pode divisão por zero"
        return erro
    }
    return a / b
}
module.exports = divisao;