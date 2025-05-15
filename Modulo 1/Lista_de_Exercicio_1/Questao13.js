// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//  amédiaaritmética desses números.

const prompt = require('prompt-sync')()
let numero
let contador = 0
let soma = 0
let resultado

do{
    numero = Number(prompt('Digite um número ou 0 para parar: '))
    if(numero !== 0){
        soma += numero
        contador++
    }
} while(numero != 0)

resultado = soma/contador

console.log(`A média aritimédica dos ${contador} números é ${resultado}`)