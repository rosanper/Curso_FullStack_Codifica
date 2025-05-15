// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')()

let primeiroValor = Number(prompt('Digite o primeiro valor: '))
let segundoValor = Number(prompt('Digite o segundo valor: '))

let maiorValor
let menorValor

if(primeiroValor > segundoValor){
    maiorValor = primeiroValor
    menorValor = segundoValor
} else {
    maiorValor = segundoValor
    menorValor = primeiroValor
}

console.log(`os valores passados em ordem crescente foram: ${menorValor} , ${maiorValor}`)