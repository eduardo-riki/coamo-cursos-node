<!-- PROJETO -->

<div id="topo"></div>
<h2 align="center"><strong>Curso Node 🟩</strong></h2>

<div id="#sobre" align="center">

Repositório baseado no [Curso](https://www.youtube.com/playlist?list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP) de [Lucas Souza Dev](https://www.youtube.com/@LucasSouzaDev) utilizando NodeJS.

Acesse o [PROJETO BACK-END](https://coamo-cursos-node.vercel.app) hospedado no **Vercel**.

</div>

---

- [Commit Patterns](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657) para padronização de _commits_.

---

<div id="#tutorial">

<h2 align="center"><strong>Tutorial - Inicializar servidor 🚀</strong></h2>

1. Execute `yarn` ou `npm install` para instalar dependências
2. Configure sua `.env` à vontade
2. Execute `yarn knex:migrate` ou `npm run knex:migrate` para inicializar o banco de dados
3. Execute `yarn start` para iniciar o servidor

</div>

---

<div id="#sobre">

<h2 align="center"><strong>Sobre 📄</strong></h2>

O projeto utiliza várias tecnologias e bibliotecas populares para fornecer uma base sólida para o desenvolvimento de aplicações web. Aqui estão algumas das principais dependências usadas:

- **Typescript**
- **Express:** Um framework web minimalista e flexível para Node.js, usado para construir a API do aplicativo.
- **Knex:** Uma biblioteca SQL Query Builder para Javascript, usada para interagir com o banco de dados.
- **PostgreSQL:** Um cliente PostgreSQL não bloqueante para Node.js.
- **JWT (jsonwebtoken):** Usado para autenticação via JSON Web Tokens.
- **bcryptjs:** Usado para hash de senhas e verificação de hash.
Yup: Usado para validação de objeto.

</div>

---

<div id="#config">

<h2 align="center"><strong>Configurações de ambiente 🔧</strong></h2>

- `npx eslint --init` - Cria um arquivo *lint* **eslint.config.mjs**

- `yarn add dotenv` - Faz a conexão com o arquivo **.env**

- `yarn tsc --init` - Cria um arquivo **tsconfig.json**

</div>

---

<div id="#tests">

<h2 align="center"><strong> Testes ✅</strong></h2>

- `yarn add jest ts-jest @types/jest` - Adiciona JEST para testes

- `yarn jest --init` - Cria um arquivo **jest.config.ts**

- `yarn test` - Realiza todos os testes **tsconfig.json**

</div>

---