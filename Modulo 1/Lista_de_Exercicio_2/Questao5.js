// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

// OBS: Função obtida através dos links da internet e auxilio de IA:
// https://medium.com/@vemlavaralouca/debounce-javascript-b4c99ec4b13f
// https://stackoverflow.com/questions/75988682/debounce-in-javascript
// https://www.freecodecamp.org/news/javascript-debounce-example/


function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

function buscarProduto(termo) {
  console.log(`Buscando por: ${termo}`)
}

const buscarComDebounce = debounce(buscarProduto, 5000)

buscarComDebounce("c")
buscarComDebounce("ca")
buscarComDebounce("cam")
// buscarComDebounce("cami")
// buscarComDebounce("camis")
// buscarComDebounce("camisa")
