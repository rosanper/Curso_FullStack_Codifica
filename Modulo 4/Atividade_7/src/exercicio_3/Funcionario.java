package exercicio_3;//Exercício 3 — Herança (Hierarquia de Funcionários)
//Crie a classe base exercicio_3.Funcionario com protected String nome e protected
//BigDecimal salario (com getters). Crie exercicio_3.Gerente e exercicio_3.Desenvolvedor que
//sobrescrevem calcularBonus(): 20% do salário para gerente e 10% para
//desenvolvedor. Garanta que salários sejam positivos. Em um programa, coloque
//diferentes funcionários em uma coleção do tipo List<exercicio_3.Funcionario> e exiba o bônus
//de cada um.


import java.math.BigDecimal;

public abstract class Funcionario {
    protected String nome;
    protected BigDecimal salario;

    public Funcionario(String nome, BigDecimal salario) {
        setNome(nome);
        setSalario(salario);
    }

    public abstract BigDecimal calcularBonus();

    public String getNome() {
        return nome;
    }

    public BigDecimal getSalario() {
        return salario;
    }

    public void setNome(String nome) {
        if(nome != null && !nome.trim().isEmpty()){
            this.nome = nome;
        } else {
            throw new IllegalArgumentException("O nome nao pode ser nulo ou vazio");
        }
    }

    public void setSalario(BigDecimal salario) {
        if(salario.compareTo(BigDecimal.ZERO) >= 0){
            this.salario = salario;
        } else {
            throw new IllegalArgumentException("Salario nao pode ser negativo");
        }
    }
}
