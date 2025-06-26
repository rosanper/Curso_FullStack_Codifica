// Escreva duas funções:

// 1. paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// 2. objetoParaPares(obj) faz o inverso, retornando um array de
// pares.


let pares = [["nome","Joao"],["idade",18],["sexo","masculino"]]

let obj = {nome:"Joao", idade:18, sexo:"masculino"}

function paresParaObjeto(pares){
    let novoObjeto = {}
    for (let par of pares){
        novoObjeto[par[0]] = par[1]
    }
    return novoObjeto
}

function objetoParaPares(obj){
    let novoArray = []
    for (let o in obj){
        novoArray.push([o,obj[o]])
    }
    return novoArray
}

console.log(paresParaObjeto(pares))
console.log(objetoParaPares(obj))