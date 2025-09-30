# API de Blog - Projeto de Estudo

Este repositório contém o código-fonte de uma API RESTful para um sistema de blog simples, desenvolvida com Node.js, Express, PostgreSQL e Prisma ORM.

## Funcionalidades

-   Gerenciamento completo (CRUD) de **Usuários**, **Categorias** e **Postagens**.
-   Armazenamento seguro de senhas de usuários utilizando hashing com `bcrypt`.
-   Validação de dados de entrada para todas as rotas de criação e atualização.
-   Rota para listar todas as postagens de um usuário específico.
-   Paginação na listagem de todas as postagens.
-   Relacionamentos bem definidos entre os modelos de dados.

## Tecnologias Utilizadas

-   **Back-end**: Node.js, Express.js
-   **Banco de Dados**: PostgreSQL
-   **ORM**: Prisma
-   **Validação**: Joi
-   **Segurança**: Bcrypt.js
-   **Variáveis de Ambiente**: Dotenv

## Pré-requisitos

-   [Node.js](https://nodejs.org/) (versão 16 ou superior)
-   [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
-   Uma instância do [PostgreSQL](https://www.postgresql.org/) rodando localmente ou na nuvem.
-   Um cliente de API como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) para testar os endpoints.

## Configuração do Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
    cd SEU_REPOSITORIO
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    -   Crie um arquivo `.env` na raiz do projeto, copiando o conteúdo do arquivo `.env.example` (se houver) ou usando o modelo abaixo.
    -   Altere o valor da variável `DATABASE_URL` para a string de conexão do seu banco de dados PostgreSQL.

    ```env
    # .env
    # Substitua pelos seus dados de conexão com o PostgreSQL
    DATABASE_URL="postgresql://USUARIO:SENHA@HOST:PORTA/NOME_DO_BANCO?schema=public"

    # Porta em que o servidor irá rodar
    PORT=3000
    ```

4.  **Execute as migrações do banco de dados:**
    Este comando irá criar as tabelas `User`, `Category` e `Post` no seu banco de dados com base no `schema.prisma`.
    ```bash
    npx prisma migrate dev
    ```

## Executando a Aplicação

Para iniciar o servidor em modo de desenvolvimento (com recarregamento automático ao salvar alterações), use:

```bash
npm run dev
```

Para iniciar em modo de produção:

```bash
npm start
```

O servidor estará rodando em `http://localhost:3000`.

## Endpoints da API

A base da URL para todas as requisições é `/api`.

### Usuários (`/users`)

-   `POST /users`: Cria um novo usuário.
-   `GET /users`: Lista todos os usuários.
-   `GET /users/:id`: Obtém um usuário específico.
-   `PUT /users/:id`: Atualiza um usuário.
-   `DELETE /users/:id`: Deleta um usuário.
-   `GET /users/:id/posts`: Lista todas as postagens de um usuário específico.

### Categorias (`/categories`)

-   `POST /categories`: Cria uma nova categoria.
-   `GET /categories`: Lista todas as categorias.
-   `PUT /categories/:id`: Atualiza uma categoria.
-   `DELETE /categories/:id`: Deleta uma categoria.

### Postagens (`/posts`)

-   `POST /posts`: Cria uma nova postagem.
-   `GET /posts`: Lista todas as postagens (suporta paginação com `?page=1&limit=5`).
-   `GET /posts/:id`: Obtém uma postagem específica.
-   `PUT /posts/:id`: Atualiza uma postagem.
-   `DELETE /posts/:id`: Deleta uma postagem.
