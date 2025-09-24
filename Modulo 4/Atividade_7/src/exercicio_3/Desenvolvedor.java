package exercicio_3;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class Desenvolvedor extends Funcionario{
    public Desenvolvedor(String nome, BigDecimal salario) {
        super(nome, salario);
    }

    @Override
    public BigDecimal calcularBonus() {
        return salario.multiply(new BigDecimal(0.1)).setScale(2, RoundingMode.HALF_UP);
    }
}
