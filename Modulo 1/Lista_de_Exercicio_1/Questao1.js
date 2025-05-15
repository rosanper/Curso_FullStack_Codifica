// Escreva um programa que recebe um númerointeiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um número: '))

if (numero % 2 === 0){
    console.log('O número digitado é par')
} else{
    console.log('O número digitado é ímpar')
}