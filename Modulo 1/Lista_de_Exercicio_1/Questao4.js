// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//  Utilize switch-case para implementar a lógica de cada opção selecionada


const prompt = require('prompt-sync')()

let numero1 = Number(prompt('Digite o primeiro número: '))
let numero2 = Number(prompt('Digite o segundo número: '))

console.log('Escolha o que você quer fazer com os números: \n1 - Somar \n2 - Subtrair \n3 - Multiplicar \n4 - Dividir')
let escolha = Number(prompt('Digite sua escolha: '))

switch (escolha){
    case 1:
        console.log(`O resultado da operação de somar é ${numero1 + numero2}`)
        break
    case 2:
        console.log(`O resultado da operação de subtrair é ${numero1 - numero2}`)
        break
    case 3:
        console.log(`O resultado da operação de multiplicar é ${numero1 * numero2}`)
        break
    case 4:
        if(numero2 === 0){
            console.log('Operação inválida, não é possível dividir por 0')
        }else{
            console.log(`O resultado da operação de dividir é ${numero1 / numero2}`)
        }
        break
    default:
        console.log('Valor inválido')
}


