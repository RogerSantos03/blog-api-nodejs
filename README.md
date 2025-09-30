API de Blog com Node.js, Express & Prisma
📝 Descrição do Projeto
Este repositório contém o código-fonte do back-end (API) para um sistema de blog simples. A API foi desenvolvida seguindo os princípios da arquitetura RESTful, utilizando um stack moderno e robusto com Node.js e Express para o servidor, e PostgreSQL com o ORM Prisma para a persistência de dados.

O objetivo deste projeto é demonstrar a construção de uma API completa, gerenciando múltiplos recursos inter-relacionados (Usuários, Categorias, Postagens) e implementando funcionalidades essenciais como autenticação segura, validação de dados e paginação.

✨ Funcionalidades
[✅] Gerenciamento de Usuários: Operações CRUD completas para os usuários do sistema.

[✅] Gerenciamento de Categorias: Operações CRUD completas para as categorias das postagens.

[✅] Gerenciamento de Postagens: Operações CRUD completas para as postagens, com relacionamento obrigatório com um usuário e uma categoria.

[✅] Segurança: Armazenamento seguro de senhas utilizando hashing com bcryptjs.

[✅] Validação: Validação robusta dos dados de entrada (body) em todas as rotas de criação e atualização, utilizando Joi.

[✅] Buscas Relacionadas: Endpoint para listar todas as postagens de um usuário específico.

[✅] Paginação: Implementação de paginação na rota que lista todas as postagens.

[✅] Tratamento de Erros: Middleware centralizado para tratamento de erros, garantindo respostas consistentes.

🛠️ Tecnologias Utilizadas
Tempo de execução: Node.js

Framework do Servidor: Express.js

Banco de Dados: PostgreSQL

ORM (Mapeamento Objeto-Relacional): Prisma

Validação de Dados: Quinta-feira

Hashing de Senhas: Bcrypt.js

Variáveis de Ambiente: Dotenv

Servidor de Desenvolvimento: Nodemon

🚀 Como Executar o Projeto
Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

Pré-requisitos
Node.js (versão 18 ou superior)

NPM ou Fio

Uma instância do PostgreSQL rodando.

Um cliente de API como CarteiroouInsônia para testar os endpoints.

Instalação
Clone o repositório:

Bash

git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
Acesse a pasta do projeto:

Bash

cd nome-do-repositorio
Instale as dependências:

Bash

npm install
Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto, copiando o arquivo .env.example (se houver) ou usando o modelo abaixo.

Altere a DATABASE_URL para a string de conexão do seu banco de dados PostgreSQL.

Trecho de código

# .env
# String de conexão com o PostgreSQL
DATABASE_URL="postgresql://SEU_USUARIO:SUA_SENHA@localhost:5432/blog_api?schema=public"

# Porta da aplicação
PORT=3000
Execute as migrações do banco de dados:

Este comando irá criar as tabelas no seu banco de dados com base no schema do Prisma.

Bash

npx prisma migrate dev
Rodando a Aplicação
Para iniciar o servidor em modo de desenvolvimento (com auto-reload):

Bash

npm run dev
Para iniciar o servidor em modo de produção:

Bash

npm start
O servidor estará disponível em http://localhost:3000.

🌐 Endpoints da API
A URL base para todas as requisições é /api.

👤 Usuários
Método	Ponto final	Descrição	Corpo da Requisição (Exemplo)
POST	/users	Cria um novo usuário.	{"name": "Seu Nome", "email": "email@teste.com", "password": "123456"}
GET	/users	Lista todos os usuários.	N / D
GET	/users/:id	Obtém um usuário específico.	N / D
PUT	/users/:id	Atualiza um usuário.	{"name": "Novo Nome", "email": "novo@email.com"} (campos opcionais)
DELETE	/users/:id	Deleta um usuário.	N / D
GET	/users/:id/posts	Lista os posts de um usuário.	N / D

Exportar para as Planilhas
📚 Categorias
Método	Ponto final	Descrição	Corpo da Requisição (Exemplo)
POST	/categories	Cria uma nova categoria.	{"name": "Tecnologia"}
GET	/categories	Lista todas as categorias.	N / D
PUT	/categories/:id	Atualiza uma categoria.	{"name": "Desenvolvimento Web"}
DELETE	/categories/:id	Deleta uma categoria.	N / D

Exportar para as Planilhas
📰 Postagens
Método	Ponto final	Descrição	Corpo da Requisição (Exemplo)
POST	/posts	Cria uma nova postagem.	{"title": "Meu Primeiro Post", "content": "Conteúdo...", "userId": 1, "categoryId": 1}
GET	/posts	Lista todas as postagens (suporta paginação).	Parâmetros de consulta:?page=1&limit=5
GET	/posts/:id	Obtém uma postagem específica.	N / D
PUT	/posts/:id	Atualiza uma postagem.	{"title": "Título Atualizado", "content": "Conteúdo novo..."}(campos opcionais)
DELETE	/posts/:id	Deleta uma postagem.	N / D
