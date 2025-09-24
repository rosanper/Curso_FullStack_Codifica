package exercicio_6;

import java.util.Objects;

public class ItemCarrinho {
    private ProdutoExercicio6 produto;
    private int quantidade;

    public ItemCarrinho(ProdutoExercicio6 produto, int quantidade) {
        setProduto(produto);
        setQuantidade(quantidade);
    }

    public void setQuantidade(int quantidade) {
        if (quantidade <= 0) {
            throw new IllegalArgumentException("Quantidade deve ser maior que zero.");
        }
        this.quantidade = quantidade;
    }

    public void setProduto(ProdutoExercicio6 produto) {
        this.produto = produto;
    }

    public ProdutoExercicio6 getProduto() {
        return produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        ItemCarrinho that = (ItemCarrinho) o;
        return quantidade == that.quantidade && Objects.equals(produto, that.produto);
    }

    @Override
    public int hashCode() {
        return Objects.hash(produto, quantidade);
    }

    @Override
    public String toString() {
        return "ItemCarrinho{" +
                "produto=" + produto +
                ", quantidade=" + quantidade +
                '}';
    }
}
