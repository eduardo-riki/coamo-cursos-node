import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

// Step 4: Create a seed function
export const seed = async (knex: Knex) => {
  const [{ count }] = await knex(ETableNames.pessoa).count<[{ count: number }]>(
    "* as count"
  );

  if (!Number.isInteger(count) || Number(count) > 0) {
    return;
  }

  const pessoasToInsert = pessoas.map((pessoa) => ({
    nomeCompleto: pessoa.nomeCompleto,
    email: pessoa.email,
    cidadeId: pessoa.cidadeId,
  }));
  await knex(ETableNames.pessoa).insert(pessoasToInsert);
};

const pessoas = [
  { nomeCompleto: "Eduardo", email: "eduardo@email.com", cidadeId: 1 },
  { nomeCompleto: "João", email: "joao@email.com", cidadeId: 2 },
  { nomeCompleto: "Maria", email: "maria@email.com", cidadeId: 3 },
  { nomeCompleto: "José", email: "jose@email.com", cidadeId: 4 },
  { nomeCompleto: "Pedro", email: "pedro@email.com", cidadeId: 5 },
];
