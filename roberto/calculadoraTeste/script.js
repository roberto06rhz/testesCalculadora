function adicao(a,b) {
    return a+b
}
function subtracao(a,b) {
    return a-b
}
function multiplicacao(a,b){
    return a*b
}
function divisao(a,b){
    if (b == 0){
        return 'ERRO!'
    } else {
        return a/b
    }
}
function potencia(a,b){
    return a**b
}
function fatorial(a){
    if (a < 0){
        return 'Não é possível calcular o fatorial de um número negativo'
    } else if (a > 0){
        var fat = 1
        for (var i = 1; i <= a; i++){
            fat *= i
        }
        if (fat) {
            return fat
        }
    } else {
        return 1
    }
}




