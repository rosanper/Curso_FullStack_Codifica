//Implemente a classe abstrata FormaPagamento com validarPagamento() e
//processarPagamento(BigDecimal valor). Crie CartaoCredito, Boleto e Pix com
//validações específicas (ex.: número do cartão, formato de boleto, chave Pix). Simule
//o uso de cada forma por polimorfismo e trate erros de validação com exceções
//específicas (ex.: PagamentoInvalidoException).

package exercicio_5;

import java.math.BigDecimal;

public abstract class FormaPagamento {
    public abstract void validarPagamento();

    public void processarPagamento(BigDecimal valor) {
        validarPagamento();
        System.out.println("Pagamento de R$ " + valor.setScale(2) + " realizado com sucesso via "
                + this.getClass().getSimpleName());
    }
}
