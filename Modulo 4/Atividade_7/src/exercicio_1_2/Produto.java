package exercicio_1_2;//Exercício 1 — Encapsulamento (Classe exercicio_1_2.Produto)
//        Implemente a classe exercicio_1_2.Produto com atributos privados nome, preco e
//        quantidadeEmEstoque. Forneça getters e setters com validações: preco e
//        quantidadeEmEstoque não podem ser negativos e nome não pode ser nulo ou
//        vazio. Lance IllegalArgumentException em casos inválidos. Demonstre o uso
//        criando instâncias, alterando valores válidos e tentando atribuições inválidas.
//Exercício 2 — Encapsulamento com Validação de Regra (Desconto)
//        Estenda exercicio_1_2.Produto com o método aplicarDesconto(double porcentagem). Permita
//        apenas valores entre 0 e 50 (inclusive) e lance exceção (IllegalArgumentException
//        ou DescontoInvalidoException) se a regra for violada. Mostre, em um main ou
//        testes, o preço antes/depois do desconto e a reação a entradas inválidas.



import java.math.BigDecimal;

public class Produto {
    private String nome;
    private BigDecimal preco;
    private Integer quantidadeEmEstoque;

    public void aplicarDesconto(double porcentagem){
        if (porcentagem > 0 && porcentagem < 50 ){
            BigDecimal novoValor = getPreco().multiply(new BigDecimal(1-porcentagem/100));
            setPreco(novoValor);
        } else {
            throw new IllegalArgumentException("A porcentagem tem que ser entre 0 e 50");
        }
    }

    public Produto() {
    }

    public Produto(String nome, BigDecimal preco, Integer quantidadeEmEstoque) {
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
        return "Produto{" +
                "nome='" + nome + '\'' +
                ", preco=" + preco +
                ", quantidadeEmEstoque=" + quantidadeEmEstoque +
                '}';
    }
}
