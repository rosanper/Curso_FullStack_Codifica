package exercicio_5;

import java.util.Date;

public class CartaoCredito extends FormaPagamento{
    String numeroCartao;
    Date validade;
    Integer codigoSeguranca;

    public CartaoCredito(String numeroCartao, Date validade, Integer codigoSeguranca) {
        this.numeroCartao = numeroCartao;
        this.validade = validade;
        this.codigoSeguranca = codigoSeguranca;
    }

    public CartaoCredito() {
    }

    @Override
    public void validarPagamento() {
        // Número do cartão
        if (numeroCartao == null || numeroCartao.isEmpty()) {
            throw new PagamentoInvalidoException("Número do cartão não pode ser vazio.");
        }
        if (!numeroCartao.matches("\\d{13,19}")) {
            throw new PagamentoInvalidoException("Número do cartão inválido. Deve conter entre 13 e 19 dígitos.");
        }

        // Validade
        if (validade == null) {
            throw new PagamentoInvalidoException("Data de validade não pode ser nula.");
        }
        Date hoje = new Date();
        if (validade.before(hoje)) {
            throw new PagamentoInvalidoException("Cartão vencido. A data de validade já passou.");
        }

        // Código de segurança (CVV)
        if (codigoSeguranca == null) {
            throw new PagamentoInvalidoException("Código de segurança não pode ser nulo.");
        }
        if (!(codigoSeguranca.toString().matches("\\d{3,4}"))) {
            throw new PagamentoInvalidoException("Código de segurança inválido. Deve ter 3 ou 4 dígitos.");
        }
    }

    public String getNumeroCartao() {
        return numeroCartao;
    }

    public void setNumeroCartao(String numeroCartao) {
        this.numeroCartao = numeroCartao;
    }

    public Date getValidade() {
        return validade;
    }

    public void setValidade(Date validade) {
        this.validade = validade;
    }

    public Integer getCodigoSeguranca() {
        return codigoSeguranca;
    }

    public void setCodigoSeguranca(Integer codigoSeguranca) {
        this.codigoSeguranca = codigoSeguranca;
    }

    @Override
    public String toString() {
        return "CartaoCredito{" +
                "numeroCartao='" + numeroCartao + '\'' +
                ", validade=" + validade +
                ", codigoSeguranca=" + codigoSeguranca +
                '}';
    }
}
