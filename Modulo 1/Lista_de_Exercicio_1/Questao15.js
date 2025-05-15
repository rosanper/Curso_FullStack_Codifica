// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//  Fibonacci utilizando um loop for.

let primeiroResultadoAnterior
let segundoResultadoAnterior
let resultado
let resultadoString = ''

for(let i = 0; i < 10; i++){
    if(i==0){
        resultado = i
    } else if(i == 1){
        primeiroResultadoAnterior = resultado
        resultado = i
    } else if(i>1){
        segundoResultadoAnterior = primeiroResultadoAnterior
        primeiroResultadoAnterior = resultado
        resultado = segundoResultadoAnterior + primeiroResultadoAnterior
    }
    resultadoString += resultado + ' '
}

    console.log(`Os 10 primeiros números da sequencia de fibonacci são: ${resultadoString}`)
