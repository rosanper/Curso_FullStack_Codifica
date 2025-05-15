// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//  "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.


const prompt = require('prompt-sync')()

let nota = Number(prompt('Digite uma nota: '))

if(nota < 5){
    console.log('Aluno Reprovado!')
} else if (nota < 6){
    console.log('Aluno em Recuperação')
} else if (nota <= 10){
    console.log('Aluno Aprovado!')
}