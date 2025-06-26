// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

let array = [{nome: "iphone 15", preco: 4500}, 
             {nome: "samsung s24", preco: 3500}, 
             {nome: "motorola edge 50", preco: 1800}, 
             {nome: "xiaomi redmi note 14", preco: 1450},
             {nome: "iphone 16 pro max", preco: 9400}]

function obterNomesOrdenadosPorPreco(array){
    return array.sort((a,b) => a.preco - b.preco).map(produto => produto.nome)
}

console.log(obterNomesOrdenadosPorPreco(array))