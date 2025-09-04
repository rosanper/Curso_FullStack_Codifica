# 🎬 RecomendaFilmes

Aplicação em **React + Vite** que consome a API do **TMDB (The Movie Database)**, permitindo que usuários busquem filmes, vejam detalhes completos e montem sua lista de favoritos.

Este projeto foi desenvolvido como **Atividade 5** do curso de **Full Stack Jr**, promovido pela **+praTi** em parceria com a **Codifica**.

---

## ✨ Funcionalidades

- 🔍 Buscar filmes por título digitado no campo de busca.  
- 🎞️ Exibir lista de resultados com pôster, título, ano e botão para ver detalhes.  
- 📑 Navegação entre páginas de resultados.  
- 📖 Página de detalhes do filme com:  
  - 🎬 Diretor  
  - 🎭 Elenco  
  - 📝 Sinopse  
  - ⭐ Avaliação  

- ❤️ Adicionar/remover filmes da lista de favoritos.  
- 💾 Persistência de favoritos no **localStorage**.  
- 🔐 Campo para **login e cadastro de usuário**.  

---

## 🚧 Funcionalidades em desenvolvimento

- 🌗 Alteração de tema (claro/escuro) – lógica pronta, falta estilização.  
- 📝 Salvar novo usuário no **localStorage**.  
- ✅ Validação de login com usuários já cadastrados.  
- 🔄 Melhorias na paginação da busca.  

---

## 🛠️ Tecnologias utilizadas

- [React](https://react.dev/) – Biblioteca para construção da interface.  
- [Vite](https://vitejs.dev/) – Ferramenta de build e desenvolvimento rápido.  
- [Axios](https://axios-http.com/) – Cliente HTTP para consumo da API do TMDB.  
- [React Router DOM](https://reactrouter.com/) – Navegação entre páginas.  
- [React Icons](https://react-icons.github.io/react-icons/) – Ícones prontos para React.  

---

## 📦 Instalação e execução

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/movie-explorer.git
cd movie-explorer
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Crie uma conta e obtenha sua chave da API no TMDB
1. Acesse: [TMDB Developers](https://developer.themoviedb.org/docs/getting-started)  
2. Crie uma conta gratuita no TMDB.  
3. Vá até **Configurações > API**.  
4. Solicite uma **API Read Access Token (v4 auth)**.  
5. Copie a chave gerada.

### 4. Configure o arquivo `.env`

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_TMDB_API_KEY=sua_chave_aqui
```

> ⚠️ Nunca compartilhe sua chave diretamente no código. O `.env` deve estar listado no `.gitignore`.

### 5. Execute o servidor de desenvolvimento
```bash
npm run dev
```

Acesse no navegador: [http://localhost:5173](http://localhost:5173)

---

## 📂 Organização da aplicação

```
src/
 ├─ assets/                # Imagens e ícones estáticos
 │   └─ react.svg
 │
 ├─ components/            # Componentes reutilizáveis
 │   ├─ Footer.jsx
 │   ├─ Header.jsx
 │   └─ MovieCard.jsx
 │
 ├─ context/               # Context API para estados globais
 │   ├─ ThemeContext.jsx
 │   └─ UserContext.jsx
 │
 ├─ layouts/               # Layouts reutilizáveis
 │   └─ MainLayout.jsx
 │
 ├─ pages/                 # Páginas principais
 │   ├─ style/             # Estilos específicos das páginas
 │   ├─ Detalhes.jsx
 │   ├─ Home.jsx
 │   └─ Login.jsx
 │
 ├─ service/               # Serviços (APIs e LocalStorage)
 │   ├─ ApiService.js
 │   └─ LocalStorageService.js
 │
 ├─ App.jsx                
 ├─ App.css                
 ├─ main.jsx               
 └─ index.css              
```

---

## 🚀 Como utilizar a aplicação

1. Digite o título de um filme no campo de busca.  
2. Navegue pelos resultados paginados.  
3. Clique em **Detalhes** para visualizar informações completas do filme.  
4. Adicione ou remova filmes da sua lista de favoritos.  
5. Faça **login ou cadastro** para gerenciar sua experiência personalizada.  

 
