// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

let texto = "olá olá mundo mundo"

function removerPalavraRepetida(texto){
    let palavras = texto.split(" ")
    let resultado = []

    for(let i = 0; i < palavras.length; i++){
        if (!resultado.includes(palavras[i])){
            resultado.push(palavras[i])
        }
    }

    return resultado
}

console.log(removerPalavraRepetida(texto))
