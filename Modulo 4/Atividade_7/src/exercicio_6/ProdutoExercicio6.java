package exercicio_6;

import java.math.BigDecimal;

public class ProdutoExercicio6 {
    private String nome;
    private Dinheiro preco;

    public void aplicarDesconto(double porcentagem) {
        if (porcentagem > 0 && porcentagem <= 30) {
            BigDecimal fator = BigDecimal.valueOf(1 - porcentagem / 100.0);
            BigDecimal novoValor = preco.getValor().multiply(fator);

            this.preco = new Dinheiro(novoValor, preco.getMoeda());
        } else {
            throw new IllegalArgumentException("A porcentagem deve estar entre 0 e 30.");
        }
    }

    public ProdutoExercicio6() {
    }

    public ProdutoExercicio6(String nome, Dinheiro preco) {
        setNome(nome);
        setPreco(preco);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        if (nome != null && !nome.trim().isEmpty()) {
            this.nome = nome;
        } else {
            throw new IllegalArgumentException("O nome não pode ser nulo ou vazio.");
        }
    }

    public Dinheiro getPreco() {
        return preco;
    }

    public void setPreco(Dinheiro preco) {
        if (preco != null) {
            this.preco = preco;
        } else {
            throw new IllegalArgumentException("Preço não pode ser nulo.");
        }
    }

    @Override
    public String toString() {
        return "Produto{" +
                "nome='" + nome + '\'' +
                ", preco=" + preco +
                '}';
    }
}
