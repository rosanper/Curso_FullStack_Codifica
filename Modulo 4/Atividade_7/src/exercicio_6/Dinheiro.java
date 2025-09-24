package exercicio_6;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Objects;

public final class Dinheiro {
    private final BigDecimal valor;
    private final Moeda moeda;

    private void validarConstrutor(BigDecimal valor, Moeda moeda){
        if (valor == null || moeda == null) {
            throw new IllegalArgumentException("Valor e moeda não podem ser nulos.");
        }
        if (valor.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Valor não pode ser negativo.");
        }
    }

    public Dinheiro(BigDecimal valor, Moeda moeda) {
        validarConstrutor(valor,moeda);
        this.valor = valor.setScale(2, RoundingMode.HALF_EVEN);
        this.moeda = moeda;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public Moeda getMoeda() {
        return moeda;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Dinheiro dinheiro = (Dinheiro) o;
        return Objects.equals(valor, dinheiro.valor) && moeda == dinheiro.moeda;
    }

    @Override
    public int hashCode() {
        return Objects.hash(valor, moeda);
    }

    @Override
    public String toString() {
        return "Dinheiro{" +
                "valor=" + valor +
                ", moeda=" + moeda +
                '}';
    }
}
