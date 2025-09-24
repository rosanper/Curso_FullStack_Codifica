package exercicio_5;

import java.util.regex.Pattern;

public class Pix extends FormaPagamento{
    TipoChavePix tipoChavePix;
    String chavePix;

    public Pix(TipoChavePix tipoChavePix, String chavePix) {
        this.tipoChavePix = tipoChavePix;
        this.chavePix = chavePix;
    }

    public Pix() {
    }

    @Override
    public void validarPagamento() {
        if (chavePix == null || chavePix.isBlank()) {
            throw new IllegalArgumentException("Chave Pix não pode ser nula ou vazia.");
        }

        switch (tipoChavePix) {
            case CPF:
                // CPF deve ter 11 dígitos numéricos
                if (!chavePix.matches("\\d{11}")) {
                    throw new PagamentoInvalidoException("Chave Pix inválida: CPF deve ter 11 dígitos numéricos.");
                }
                break;

            case EMAIL:
                // Validação simples de e-mail usando regex
                if (!Pattern.matches("^[\\w\\.-]+@[\\w\\.-]+\\.[a-z]{2,}$", chavePix.toLowerCase())) {
                    throw new PagamentoInvalidoException("Chave Pix inválida: formato de e-mail incorreto.");
                }
                break;

            case TELEFONE:
                // Telefone no padrão brasileiro: +55DDDNÚMERO (ex: +5511999999999)
                if (!chavePix.matches("^\\+55\\d{11}$")) {
                    throw new PagamentoInvalidoException("Chave Pix inválida: telefone deve estar no formato +55DDDNÚMERO.");
                }
                break;

            default:
                throw new PagamentoInvalidoException("Tipo de chave Pix inválido.");
        }
    }

    public TipoChavePix getTipoChavePix() {
        return tipoChavePix;
    }

    public void setTipoChavePix(TipoChavePix tipoChavePix) {
        this.tipoChavePix = tipoChavePix;
    }

    public String getChavePix() {
        return chavePix;
    }

    public void setChavePix(String chavePix) {
        this.chavePix = chavePix;
    }

    @Override
    public String toString() {
        return "Pix{" +
                "tipoChavePix=" + tipoChavePix +
                ", chavePix='" + chavePix + '\'' +
                '}';
    }
}
