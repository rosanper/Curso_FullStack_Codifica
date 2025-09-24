package exercicio_7;

import java.math.BigDecimal;

public class ProdutoExercicio7 implements Identificavel<Integer>{
    private Integer id;
    private String nome;
    private BigDecimal preco;
    private Integer quantidadeEmEstoque;

    @Override
    public Integer getId() {
        return this.id;
    }

    public void aplicarDesconto(double porcentagem){
        if (porcentagem > 0 && porcentagem < 50 ){
            BigDecimal novoValor = getPreco().multiply(new BigDecimal(1-porcentagem/100));
            setPreco(novoValor);
        } else {
            throw new IllegalArgumentException("A porcentagem tem que ser entre 0 e 50");
        }
    }

    public ProdutoExercicio7() {
    }

    public ProdutoExercicio7(Integer id, String nome, BigDecimal preco, Integer quantidadeEmEstoque) {
        this.id = id;
        setNome(nome);
        setPreco(preco);
        setQuantidadeEmEstoque(quantidadeEmEstoque);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        if(nome != null && !nome.trim().isEmpty()){
            this.nome = nome;
        } else {
            throw new IllegalArgumentException("O nome nao pode ser nulo");
        }

    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        if(preco != null && preco.compareTo(BigDecimal.ZERO) >= 0){
            this.preco = preco;
        } else {
            throw new IllegalArgumentException("Preco nao pode ser negativo");
        }
    }

    public Integer getQuantidadeEmEstoque() {
        return quantidadeEmEstoque;
    }

    public void setQuantidadeEmEstoque(Integer quantidadeEmEstoque) {
        if(quantidadeEmEstoque != null && quantidadeEmEstoque >= 0){
            this.quantidadeEmEstoque = quantidadeEmEstoque;
        } else {
            throw new IllegalArgumentException("Quantidade de estoque nao pode ser negativo");
        }

    }

    @Override
    public String toString() {
        return  "nome='" + nome + '\'' +
                ", preco=" + preco +
                ", quantidadeEmEstoque=" + quantidadeEmEstoque;
    }
}
