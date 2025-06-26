// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

function fatorial(n){
    if (n < 0) throw Error('Nao eh possivel fazer fatorial de numero negativo'); 
    if (n === 0) return 1
    return n * fatorial(n-1)  
}

console.log(fatorial(5))