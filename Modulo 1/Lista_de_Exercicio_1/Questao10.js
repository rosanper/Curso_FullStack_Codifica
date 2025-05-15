// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')()

let numeroInteiro = Number(prompt('Passe um número inteiro: '))

for(let i = 0; i < 10; i++){
    console.log(`O número passado foi ${numeroInteiro}`)
}