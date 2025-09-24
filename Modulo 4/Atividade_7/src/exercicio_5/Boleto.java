package exercicio_5;

import java.util.Date;

public class Boleto extends FormaPagamento{
    String numeroBoleto;
    Date dataVencimento;

    public Boleto(String numeroBoleto, Date dataVencimento) {
        this.numeroBoleto = numeroBoleto;
        this.dataVencimento = dataVencimento;
    }

    public Boleto() {
    }

    @Override
    public void validarPagamento() {
        if (numeroBoleto == null || numeroBoleto.isEmpty()) {
            throw new PagamentoInvalidoException("Número do boleto não pode ser vazio.");
        }

        if (!numeroBoleto.matches("\\d{44}")) { // 44 dígitos numéricos
            throw new PagamentoInvalidoException("Número do boleto inválido. Deve conter 44 dígitos.");
        }

        if (dataVencimento == null) {
            throw new PagamentoInvalidoException("Data de vencimento não pode ser nula.");
        }

        Date hoje = new Date();
        if (dataVencimento.before(hoje)) {
            throw new PagamentoInvalidoException("Boleto vencido. Data de vencimento anterior à data atual.");
        }
    }

    public String getNumeroBoleto() {
        return numeroBoleto;
    }

    public void setNumeroBoleto(String numeroBoleto) {
        this.numeroBoleto = numeroBoleto;
    }

    public Date getDataVencimento() {
        return dataVencimento;
    }

    public void setDataVencimento(Date dataVencimento) {
        this.dataVencimento = dataVencimento;
    }

    @Override
    public String toString() {
        return "Boleto{" +
                "numeroBoleto='" + numeroBoleto + '\'' +
                ", dataVencimento=" + dataVencimento +
                '}';
    }
}
