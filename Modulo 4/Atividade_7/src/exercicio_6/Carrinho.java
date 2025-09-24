package exercicio_6;

import java.math.BigDecimal;
import java.util.*;

public class Carrinho implements IOperacoesCarrinho {

    private final List<ItemCarrinho> itens;

    public Carrinho(List<ItemCarrinho> itens) {
        this.itens = Collections.unmodifiableList(new ArrayList<>(itens));
    }

    public List<ItemCarrinho> getItens() {
        return itens;
    }

    @Override
    public Carrinho adicionar(ItemCarrinho itemCarrinho) {
        if (itemCarrinho == null) {
            throw new IllegalArgumentException("Item não pode ser nulo.");
        }
        List<ItemCarrinho> novaLista = new ArrayList<>(this.itens);
        novaLista.add(itemCarrinho);
        return new Carrinho(novaLista);
    }

    @Override
    public Carrinho remover(ItemCarrinho itemCarrinho) {
        if (itemCarrinho == null) {
            throw new IllegalArgumentException("Item não pode ser nulo.");
        }
        List<ItemCarrinho> novaLista = new ArrayList<>(this.itens);
        if (!novaLista.remove(itemCarrinho)) {
            throw new IllegalArgumentException("Item não encontrado no carrinho.");
        }
        return new Carrinho(novaLista);
    }

    @Override
    public Carrinho aplicarCupom(int porcentagem) {
        if (porcentagem <= 0 || porcentagem > 30) {
            throw new IllegalArgumentException("Cupom inválido. Máximo permitido: 30%");
        }

        List<ItemCarrinho> novaLista = new ArrayList<>();
        for (ItemCarrinho item : this.itens) {
            ProdutoExercicio6 produtoOriginal = item.getProduto();
            ProdutoExercicio6 produtoComDesconto = new ProdutoExercicio6(
                    produtoOriginal.getNome(),
                    produtoOriginal.getPreco()
            );
            produtoComDesconto.aplicarDesconto(porcentagem);
            novaLista.add(new ItemCarrinho(produtoComDesconto, item.getQuantidade()));
        }

        return new Carrinho(novaLista);
    }

    private Map<Moeda, Dinheiro> calcularTotaisPorMoeda() {
        Map<Moeda, BigDecimal> totais = new HashMap<>();
        for (ItemCarrinho item : itens) {
            Dinheiro preco = item.getProduto().getPreco();
            BigDecimal subtotal = preco.getValor().multiply(BigDecimal.valueOf(item.getQuantidade()));
            totais.merge(preco.getMoeda(), subtotal, BigDecimal::add);
        }
        // já devolve Map pronto
        Map<Moeda, Dinheiro> resultado = new HashMap<>();
        totais.forEach((moeda, valor) -> resultado.put(moeda, new Dinheiro(valor, moeda)));
        return resultado;
    }

    public Dinheiro calcularTotalCarrinho(Moeda destino) {
        BigDecimal total = calcularTotaisPorMoeda().values().stream()
                .map(d -> converter(d.getValor(), d.getMoeda(), destino))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        return new Dinheiro(total, destino);
    }

    private BigDecimal converter(BigDecimal valor, Moeda origem, Moeda destino) {
        if (origem == destino) return valor;
        Map<String, Double> taxas = Map.of(
                "DOLAR->REAL", 5.0, "DOLAR->EURO", 0.9,
                "REAL->DOLAR", 0.2, "REAL->EURO", 0.18,
                "EURO->REAL", 5.5, "EURO->DOLAR", 1.1
        );
        String chave = origem + "->" + destino;
        if (!taxas.containsKey(chave)) throw new IllegalArgumentException("Conversão não suportada: " + chave);
        return valor.multiply(BigDecimal.valueOf(taxas.get(chave)));
    }

    @Override
    public String toString() {
        return "Carrinho{" +
                "itens=" + itens +
                '}';
    }
}
