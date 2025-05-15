// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra

const prompt = require('prompt-sync')()

let qntMacas = Number(prompt('Digite a quantidade de Maçãs que você comprou: '))
let valorUnidade

if(qntMacas < 12){
    valorUnidade = 0.3
} else {
    valorUnidade = 0.25
}

console.log(`Sua compra deu ${qntMacas*valorUnidade} reais`)
