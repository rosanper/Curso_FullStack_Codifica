// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

// OBS: Função obtida através dos links da internet e auxilio de IA:
// https://www.dio.me/articles/memoization-aumente-a-performance-das-suas-funcoes-javascript
// https://medium.com/trainingcenter/memoization-com-javascript-direto-ao-ponto-82044cf100c7


function memoize(fn) {
  const cache = new Map();
  
  return (...args) => {
    const key = args 
    
    if(!!cache[key]) {
      return cache[key]
    }
   
    const result = fn && fn(...args)  
    cache[key] = result

    console.log(cache)
    return result
  }
}

function fatorial(n) {
  if (n === 0) return 1
  return n * fatorial(n - 1)
}

const memoFatorial = memoize(fatorial)

console.log(memoFatorial(30)) 
console.log(memoFatorial(40)) 
