// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')()

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let  numeroGerado = gerarNumeroAleatorio(1,100)

let numeroDigitado = Number(prompt('Digite um numero: '))

let contador = 1

while( numeroDigitado != numeroGerado){
    if (numeroDigitado>numeroGerado){
        console.log("Mais baixo!")
    } else if (numeroDigitado<numeroGerado){
        console.log("Mais alto!")
    }

    numeroDigitado = Number(prompt('Digite um numero: '))
    contador++
}

if (numeroDigitado == numeroGerado){
    console.log(`Parabens, voce acertou o numero na ${contador}ª tentativa`)
}