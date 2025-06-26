// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.


let array = [{cliente: "Joao", total: 4200},{cliente: "Maria", total: 1400},{cliente: "Zezinho", total: 2300},{cliente: "Joao", total: 800},{cliente: "Maria", total: 800.50}]


function agruparPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
  }, {});
}

console.log(agruparPorCliente(array))