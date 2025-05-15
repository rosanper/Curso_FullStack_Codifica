// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')()
let soma = 0
let numero

for(let i = 0; i < 5; i++){
    numero = Number(prompt(`Passe ${i+1}º número inteiro: `))
    soma += numero
}

console.log(`O resultado da soma dos numeros é ${soma}`)
  