// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//  utilizando um loop for ou while.

const prompt = require('prompt-sync')()
let numeroInteiro
let resultado
let stringResultado = ''

numeroInteiro = Number(prompt('Passe um número inteiro: '))
resultado = numeroInteiro
stringResultado += numeroInteiro

for(let i = numeroInteiro-1; i > 0; i--){
    resultado *= i
    stringResultado += `x${i}`
}

console.log(`Fatorial: ${stringResultado} = ${resultado}`)