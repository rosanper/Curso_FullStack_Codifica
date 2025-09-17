# 🛒 Atividade 6 -- Implementação de Tela com Diferentes Técnicas de CSS

## 📌 Descrição da Tarefa

O objetivo desta atividade foi **implementar a mesma tela em quatro
versões diferentes**, utilizando exclusivamente cada uma das técnicas de
estilização solicitadas:

1.  **CSS Global**\
2.  **CSS Modules**\
3.  **Tailwind CSS**\
4.  **styled-components**

A tela a ser construída deveria conter:

-   **Navbar fixa**: com logo, toggle de tema (claro/escuro com
    persistência em `localStorage`) e badge de carrinho.\
-   **Grid de produtos responsivo**:
    -   ≤480px → 1 coluna\
    -   481--768px → 2 colunas\
    -   769--1024px → 3 colunas\
    -   ≥1025px → 4 colunas\
-   **Card de produto**: imagem 1:1 com espaço reservado, título em até
    2 linhas (ellipsis), preço, avaliação por estrelas, tag de status
    ("Novo" ou "Promo"), e botão de ação ("Adicionar"/"Remover") com
    variantes (solid, outline, ghost).

### Estados e Interações

-   **Hover**: elevação/sombra\
-   **Focus**: visível (teclado)\
-   **Disabled**: botão inativo\
-   **Loading Skeleton**: com placeholders para evitar layout shift

### Acessibilidade

-   Navegação por teclado garantida\
-   `aria-*` aplicado em botões e ícones\
-   Contraste respeitando **≥ 4.5:1**

### Animações

-   Transições suaves (150--250ms) em transform e opacity

------------------------------------------------------------------------

## 📂 Organização da Aplicação

A aplicação foi organizada na pasta `src/`, com a seguinte estrutura:

    src/
     ├─ assets/              # imagens dos produtos
     ├─ components/          # Botão, Card, Header, Carrinho etc.
     ├─ contexts/            # Context API (contador, tema)
     ├─ layouts/             # MainLayout com Header fixo e Outlet
     ├─ pages/               # Home.jsx com grid de produtos
     ├─ styles/              # CSS Modules
     ├─ index.css            # CSS Global + Tailwind base
     ├─ main.jsx             # ponto de entrada

Cada componente utiliza **apenas um tipo de CSS** conforme o objetivo da
atividade: - `Botao.jsx` → **styled-components**\
- `ImgCarrinhoCompras.jsx` → **CSS Modules**\
- `Card.jsx` → **Tailwind CSS**\
- `Header.jsx` → **MUI (Material UI)**\
- `Home.jsx` → **CSS Global**

------------------------------------------------------------------------

## ⚙️ Tecnologias Utilizadas

-   **React + Vite**\
-   **Context API** (contador de itens e tema com persistência)\
-   **Tailwind CSS** (configurado com `darkMode: class`)\
-   **styled-components**\
-   **CSS Modules**\
-   **Material UI (MUI)** -- ícones e alguns utilitários de UI\
-   **React Icons** -- ícones extras

------------------------------------------------------------------------

## 📦 Instalações Necessárias

Durante o desenvolvimento, foram instalados os seguintes pacotes:

``` bash
# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# styled-components
npm install styled-components

# Material UI (MUI) e ícones
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

# React Icons
npm install react-icons
```

------------------------------------------------------------------------

## ⚠️ Observações Importantes

-   O **Card está com um bug**: atualmente o tema **não altera
    corretamente** entre claro e escuro. O problema será corrigido em
    breve.\
-   Foi adicionada a funcionalidade de **armazenar produtos selecionados
    no Local Storage**.\
-   O **carrinho realiza a soma total de produtos adicionados** e exibe
    no contador (badge).

------------------------------------------------------------------------

## ✅ Conclusão

-   Foram implementadas **todas as quatro versões de estilização**
    solicitadas porém em uma pagina.\
-   Cada componente utilizou **apenas uma técnica de CSS**, garantindo a
    prática diferenciada.\
-   **Tema dark/light** aplicado em toda a aplicação, com persistência
    no `localStorage` (exceto bug atual no Card).\
-   **Grid responsivo** segue exatamente os breakpoints solicitados.\
-   A estrutura de pastas está clara e organizada.
