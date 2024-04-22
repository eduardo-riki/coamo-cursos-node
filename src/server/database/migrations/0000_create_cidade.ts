import type { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
  knex.schema
    .createTable(ETableNames.cidade, (table) => {
      table.bigIncrements("id").primary().index(),
        table.string("nome", 100).checkLength("<=", 100).index().notNullable(),
        table
          .string("estado", 100)
          .checkLength("<=", 100)
          .index()
          .notNullable(),
        table.comment("Tabela usada para armazenar Cidades do sistema");
    })
    .then(() => {
      console.log(`# Create table ${ETableNames.cidade}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.cidade);
}
