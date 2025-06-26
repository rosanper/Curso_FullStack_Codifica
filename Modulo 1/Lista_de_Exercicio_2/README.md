# Resoluções de Atividades de JavaScript - Controle, Funções e Estruturas de Dados

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

Este repositório contém a resolução de **9 atividades** de lógica e estrutura de dados utilizando **JavaScript**, com foco em:

- Estruturas de controle avançadas
- Funções, recursividade e otimizações (debounce e memoization)
- Manipulação de arrays e objetos complexos

Cada exercício está salvo em um arquivo individual: `Questao1.js` até `Questao9.js`.

---

## 📌 Sumário

- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [⚙️ Pré-requisitos](#️-pré-requisitos)
- [📦 Como Executar os Códigos](#-como-executar-os-códigos)
- [📚 Lista de Atividades](#-lista-de-atividades)
- [💡 Exemplos de Execução](#-exemplos-de-execução)

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Node.js**
- [prompt-sync](https://www.npmjs.com/package/prompt-sync) *(para entradas no console, quando necessário)*

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org) instalado
- Terminal (bash, PowerShell, CMD, etc.)
- Git (opcional)

---

## 📦 Como Executar os Códigos

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

2. Instale o pacote de entrada de dados (se necessário):

```bash
npm install prompt-sync
```

3. Execute qualquer questão com:

```bash
node QuestaoX.js
```

Substitua `X` pelo número da questão que deseja testar.

---

## 📚 Lista de Atividades

### 🔁 Seção 1: Estruturas de Controle Avançadas
1. Verifica se a combinação forma uma data real, considerando anos bissextos.

2. Jogo interativo que gera número aleatório de 1 a 100 e responde com "mais alto" ou "mais baixo".

3. Recebe uma frase e retorna um array com palavras únicas.

---

### 🧠 Seção 2: Funções e Recursão

4. Calcula fatorial de forma recursiva, lançando erro para negativos.

5. Executa uma função apenas após o tempo de inatividade definido (`delay`).

6. Memoriza resultados de uma função para evitar recomputações com os mesmos argumentos.

---

### 📦 Seção 3: Arrays e Objetos Complexos

7. Retorna um array com os nomes dos produtos ordenados por preço crescente.

8. Agrupa totais de vendas por cliente utilizando `reduce`.

9. Transforma array de pares `[chave, valor]` em objeto e depois  
   Faz o inverso: transforma objeto em array de pares.

---

## 💡 Exemplos de Execução

```bash
node Questao1.js
Resultado: true
```
