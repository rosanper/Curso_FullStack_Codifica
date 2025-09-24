package exercicio_6;

public interface IOperacoesCarrinho {
    Carrinho adicionar(ItemCarrinho itemCarrinho);
    Carrinho remover(ItemCarrinho itemCarrinho);
    Carrinho aplicarCupom(int porcentagem);
}
