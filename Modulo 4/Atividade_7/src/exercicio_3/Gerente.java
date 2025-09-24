package exercicio_3;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class Gerente extends Funcionario{
    public Gerente(String nome, BigDecimal salario) {
        super(nome, salario);
    }

    @Override
    public BigDecimal calcularBonus() {
        return salario.multiply(new BigDecimal(0.20)).setScale(2, RoundingMode.HALF_UP);
    }
}
