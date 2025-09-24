# Exercícios de Programação Orientada a Objetos em Java

Este repositório reúne uma coleção de exercícios práticos de **Programação Orientada a Objetos (POO)** em Java, organizados por conceitos fundamentais.  
Cada exercício foi implementado em **packages separados**, mas existe apenas **um programa principal (`Main`)** que executa exemplos de uso de todas as classes.

---

## 📦 Estrutura dos Exercícios

### 🔹 Exercício 1 — Encapsulamento
- Package com a classe `Produto` e validações de atributos.
- Demonstra o uso de **getters/setters com regras de negócio**.

---

### 🔹 Exercício 2 — Encapsulamento com Validação de Regra
- Extensão do `Produto` com aplicação de desconto.
- Demonstra o uso de **exceções** para regras inválidas.

---

### 🔹 Exercício 3 — Herança
- Hierarquia `Funcionario`, `Gerente` e `Desenvolvedor`.
- Demonstra **herança e sobrescrita de métodos**.

---

### 🔹 Exercício 4 — Polimorfismo com Interface
- Interface `IMeioTransporte` e implementações (`Carro`, `Bicicleta`, `Trem`).
- Demonstra **polimorfismo** por meio de coleções de interface.

---

### 🔹 Exercício 5 — Abstração
- Classe abstrata `FormaPagamento` e subclasses (`CartaoCredito`, `Boleto`, `Pix`).
- Demonstra o uso de **abstração e polimorfismo** em cenários de pagamento.

---

### 🔹 Exercício 6 — Imutabilidade e Objetos de Valor
- Implementação de `Dinheiro`, `ItemCarrinho` e `Carrinho`.
- Demonstra **imutabilidade e objetos de valor** em operações de carrinho de compras.

---

### 🔹 Exercício 7 — Generics
- Interface genérica `IRepository` e implementação `InMemoryRepository`.
- Demonstra **uso de Generics e repositórios em memória**.

---

### 🔹 Exercício 8 — Padrão Strategy (🚧 Em desenvolvimento)
- Será implementado futuramente.
- O objetivo é modelar diferentes estratégias de cálculo de frete (`Sedex`, `Pac`, `RetiradaNaLoja`, promoções via lambda).
- Demonstrará o uso do **padrão de projeto Strategy** e **injeção de comportamento em tempo de execução**.

---

## 🚀 Execução


Organizados por packages, com um `Main` para demonstração completa.

Para rodar os exercícios, basta compilar os arquivos e executar o `Main`:

```bash
javac */*.java Main.java
java Main
```

O `Main` centralizado demonstra:
- Criação e manipulação de produtos.  
- Validações e exceções.  
- Funcionários com bônus diferenciados.  
- Transportes com comportamentos distintos.  
- Pagamentos com validações específicas.  
- Fluxo completo de carrinho de compras imutável.  
- Operações de repositório genérico.  

---

## 📖 Conceitos Revisitados
- Encapsulamento  
- Regras de negócio e exceções  
- Herança e polimorfismo  
- Interfaces e abstrações  
- Imutabilidade e objetos de valor  
- Generics  
- Padrões de projeto (Strategy – futuro)  

---
