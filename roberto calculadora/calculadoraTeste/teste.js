
import ope from '../funcoes.js'
const { adicao, subtracao, multiplicacao, divisao, fatorial, potencia, raiz } = ope
console.assert(adicao(10,7) == 17, "10 + 7 é 17")
console.assert(adicao(4,0) == 4, "4 + 0 é 4")
console.assert(adicao(1,1) == 2, "1 + 1 é 2")
console.assert(adicao(0,3) == 3, "0 + 3 é 3")

console.assert(subtracao(4,3) == -1, "4 - 3 é -1")
console.assert(subtracao(7,5) == 2, "7 - 5 é 2")
console.assert(subtracao(5,0) == 5, "5 - 0 é 5")
console.assert(subtracao(0,4) == -4, "0 - 4 é -4")
console.assert(subtracao(0,0) == 0, "0 - 0 é 0")
console.assert(subtracao(0,-3) == 3, "0 - 3 é 3") 
console.assert(subtracao(-3,0) == -3, "3 - 0 é -3")

console.assert(multiplicacao(6,7) == 42, "6 x 7 é 42")
console.assert(multiplicacao(4,0) == 0, "4 x 0 é 0")
console.assert(multiplicacao(0,0) == 0, "0 x 0 é 0")
console.assert(multiplicacao(1,-3), "1 x -3 é -3")

console.assert(divisao(2,10) == 0.2, "2 / 10 é 0.2")
console.assert(divisao(20,2) == 10, "20 / 2 é 10")
console.assert(divisao(4,0) == "ERRO!", "ERRO! não dividir  por 0")
console.assert(divisao(0,4) == 0, "0 / 4 é 0")
console.assert(divisao(400,500) == 0.8, "400 / 500 é 0.8")
console.assert(divisao(500,400) == 1.25, "500 / 400 é 1.25")

console.assert(raiz(10) ==  3,162, "A raiz de 10 é  3,162")
console.assert(raiz(5) == 2,23606797749979, "A raiz de 5 é 2,23606797749979")

console.assert(fatorial(-5) == "Não é possível calcular o fatorial de um número negativo", "não se calcula um número negativo")
console.assert(fatorial(0) == 1, "!0 é 1")
console.assert(fatorial(5) == 120, "!5 é 120")

console.assert(potencia(5,3) == 125, "5^3 é 125")
console.assert(potencia(5,-3) == 0.008, "5^-3 é 0.008")
console.assert(potencia(-5,3) == -125, "-5^3 é -125")
console.assert(potencia(-5,-3) == -0.008, "-5^-3 é -0.008")
console.assert(potencia(10,2) == 50, "10^2 é 50")
console.assert(potencia(-5,-2) == 0.04, "-5^-2 é 0.04")


