import exercicio_1_2.Produto;
import exercicio_3.Desenvolvedor;
import exercicio_3.Funcionario;
import exercicio_3.Gerente;
import exercicio_4.Bicicleta;
import exercicio_4.Carro;
import exercicio_4.Trem;
import exercicio_5.*;
import exercicio_6.*;
import exercicio_7.IRepository;
import exercicio_7.InMemoryRepository;
import exercicio_7.ProdutoExercicio7;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) throws Exception{

        //        Exercicio 1 e 2
        System.out.println("\n--------------- Exercicio 1 e 2 --------------------\n");
        Produto tv = new Produto("TV", new BigDecimal(50),2);
//        Produto tv2 = new Produto("", new BigDecimal(50),2); // Erro nome
//        Produto tv3 = new Produto("TV", new BigDecimal(-20),2); // Erro numero preco
//        Produto tv4 = new Produto("TV", new BigDecimal(20),-3); // Erro numero quantidade
        tv.aplicarDesconto(25);
//        tv.aplicarDesconto(65); // Erro porcentagem
        System.out.println(tv.toString());

        //        Exercicio 3
        System.out.println("\n--------------- Exercicio 3 --------------------\n");
        List<Funcionario> funcionarios = new ArrayList<>();

        funcionarios.add(new Gerente("Maria", new BigDecimal(10000)));
        funcionarios.add(new Desenvolvedor("João", new BigDecimal(5000)));
        funcionarios.add(new Desenvolvedor("Ana", new BigDecimal(7896.99)));

        for (Funcionario f : funcionarios) {
            System.out.println(f.getNome() + " - Bônus: R$ " + f.calcularBonus());
        }

        //        Exercicio 4
        System.out.println("\n--------------- Exercicio 4 --------------------\n");
        Carro carro = new Carro();
        Bicicleta bicicleta = new Bicicleta();
        Trem trem = new Trem();


        for (int i = 0; i < 3; i++) {
            carro.acelerar();
            bicicleta.acelerar();
            trem.acelerar();
        }

        for (int i = 0; i < 2; i++) {
            carro.frear();
            bicicleta.frear();
            trem.frear();
        }

        //        Exercicio 5
        System.out.println("\n--------------- Exercicio 5 --------------------\n");
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

        // ---------------- PIX ----------------
        System.out.println("=== Testando PIX ===");
        try {
            Pix pixValido = new Pix(TipoChavePix.EMAIL, "teste@email.com");
            pixValido.processarPagamento(new BigDecimal("100.50"));
        } catch (PagamentoInvalidoException e) {
            System.out.println("Erro PIX válido: " + e.getMessage());
        }

        try {
            Pix pixInvalido = new Pix(TipoChavePix.CPF, "123"); // CPF inválido
            pixInvalido.processarPagamento(new BigDecimal("50"));
        } catch (PagamentoInvalidoException e) {
            System.out.println("Erro PIX inválido: " + e.getMessage());
        }


        // ---------------- BOLETO ----------------
        System.out.println("\n=== Testando BOLETO ===");
        try {
            Boleto boletoValido = new Boleto("12345678901234567890123456789012345678901234", sdf.parse("25/12/2025"));
            boletoValido.processarPagamento(new BigDecimal("300.00"));
        } catch (PagamentoInvalidoException e) {
            System.out.println("Erro Boleto válido: " + e.getMessage());
        }

        try {
            Boleto boletoVencido = new Boleto("1234567890", sdf.parse("01/01/2020")); // número curto + vencido
            boletoVencido.processarPagamento(new BigDecimal("150.00"));
        } catch (PagamentoInvalidoException e) {
            System.out.println("Erro Boleto inválido: " + e.getMessage());
        }

        // ---------------- CARTÃO DE CRÉDITO ----------------
        System.out.println("\n=== Testando CARTÃO DE CRÉDITO ===");
        try {
            CartaoCredito cartaoValido = new CartaoCredito("4111111111111111", sdf.parse("12/12/2030"), 123);
            cartaoValido.processarPagamento(new BigDecimal("500.00"));
        } catch (PagamentoInvalidoException e) {
            System.out.println("Erro Cartão válido: " + e.getMessage());
        }

        try {
            CartaoCredito cartaoInvalido = new CartaoCredito("123", sdf.parse("01/01/2020"), 12); // número e CVV inválidos
            cartaoInvalido.processarPagamento(new BigDecimal("50.00"));
        } catch (PagamentoInvalidoException e) {
            System.out.println("Erro Cartão inválido: " + e.getMessage());
        }

        //        Exercicio 6
        System.out.println("\n--------------- exercicio 6 --------------------\n");

        try {
            // Criando produtos em moedas diferentes
            ProdutoExercicio6 produto1 = new ProdutoExercicio6("Camiseta",
                    new Dinheiro(new BigDecimal("50.00"), Moeda.REAL));
            ProdutoExercicio6 produto2 = new ProdutoExercicio6("Tênis",
                    new Dinheiro(new BigDecimal("200.00"), Moeda.DOLAR));
            ProdutoExercicio6 produto3 = new ProdutoExercicio6("Boné",
                    new Dinheiro(new BigDecimal("30.00"), Moeda.EURO));
            ProdutoExercicio6 produto4 = new ProdutoExercicio6("Calça Jeans",
                    new Dinheiro(new BigDecimal("120.00"), Moeda.REAL));
            ProdutoExercicio6 produto5 = new ProdutoExercicio6("Jaqueta",
                    new Dinheiro(new BigDecimal("350.00"), Moeda.DOLAR));
            ProdutoExercicio6 produto6 = new ProdutoExercicio6("Relógio",
                    new Dinheiro(new BigDecimal("500.00"), Moeda.EURO));

            // Criando itens
            ItemCarrinho item1 = new ItemCarrinho(produto1, 2); // 2 camisetas
            ItemCarrinho item2 = new ItemCarrinho(produto2, 1); // 1 tênis
            ItemCarrinho item3 = new ItemCarrinho(produto3, 3); // 3 bonés
            ItemCarrinho item4 = new ItemCarrinho(produto4, 1); // 1 calça jeans
            ItemCarrinho item5 = new ItemCarrinho(produto5, 1); // 1 jaqueta
            ItemCarrinho item6 = new ItemCarrinho(produto6, 2); // 2 relógios

            // Criando carrinho inicial
            Carrinho carrinho = new Carrinho(List.of(item1, item2));
            System.out.println("Carrinho inicial:");
            for (ItemCarrinho item : carrinho.getItens()) {
                System.out.println("- " + item);
            }

            // Adicionando mais produtos
            carrinho = carrinho.adicionar(item3).adicionar(item4).adicionar(item5).adicionar(item6);
            System.out.println("Carrinho após adicionar todos os itens: ");
            for (ItemCarrinho item : carrinho.getItens()) {
                System.out.println("- " + item);
            }

            // Tentando remover item inexistente -> ERRO
            try {
                ProdutoExercicio6 produtoInexistente = new ProdutoExercicio6("Óculos",
                        new Dinheiro(new BigDecimal("100.00"), Moeda.REAL));
                ItemCarrinho itemInexistente = new ItemCarrinho(produtoInexistente, 1);

                carrinho = carrinho.remover(itemInexistente);
            } catch (IllegalArgumentException e) {
                System.out.println("Erro esperado ao remover item inexistente: " + e.getMessage());
            }

            // Aplicando cupom de desconto válido
            carrinho = carrinho.aplicarCupom(15);
            System.out.println("Carrinho com desconto de 15% aplicado: " + carrinho.getItens());

            // Tentando aplicar cupom inválido -> ERRO
            try {
                carrinho = carrinho.aplicarCupom(40);
            } catch (IllegalArgumentException e) {
                System.out.println("Erro esperado ao aplicar cupom inválido: " + e.getMessage());
            }

            // Calculando valor total em REAL
            Dinheiro totalBRL = carrinho.calcularTotalCarrinho(Moeda.REAL);
            System.out.println("Total do carrinho em REAL: " + totalBRL);

            // Calculando valor total em DOLAR
            Dinheiro totalUSD = carrinho.calcularTotalCarrinho(Moeda.DOLAR);
            System.out.println("Total do carrinho em DOLAR: " + totalUSD);

            // Calculando valor total em EURO
            Dinheiro totalEUR = carrinho.calcularTotalCarrinho(Moeda.EURO);
            System.out.println("Total do carrinho em EURO: " + totalEUR);

        } catch (Exception e) {
            System.out.println("Erro inesperado: " + e.getMessage());
        }

        //        Exercicio 7
        System.out.println("\n--------------- exercicio 7 --------------------\n");
        IRepository<ProdutoExercicio7, Integer> produtoRepository = new InMemoryRepository<>();

        ProdutoExercicio7 produto1 = new ProdutoExercicio7(1, "Caneta", new BigDecimal(2.00), 2);
        ProdutoExercicio7 produto2 = new ProdutoExercicio7(2, "Chiclete", new BigDecimal(1.00), 5);
        ProdutoExercicio7 produto3 = new ProdutoExercicio7(3, "Chocolate", new BigDecimal(3.90), 1);


        produtoRepository.salvar(produto1);
        produtoRepository.salvar(produto2);
        produtoRepository.salvar(produto3);

        System.out.println("Lista de produtos:");
        for(ProdutoExercicio7 produto : produtoRepository.listarTodos()) {
            System.out.println("Produto: " + produto.toString());
        }

        System.out.println("\nproduto com o id 2: " + produtoRepository.buscarPorId(2).get().toString());


        produtoRepository.remover(3);
//        produtoRepository.remover(3);  //Erro ao deletar id que inexistente


        System.out.println("\nLista de produtos depois da  exclusão");
        for(ProdutoExercicio7 produto : produtoRepository.listarTodos()) {
            System.out.println("Produto: " + produto.toString());
        }


    }
}
