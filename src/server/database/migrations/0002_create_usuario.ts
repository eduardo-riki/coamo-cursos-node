import type { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.usuario, (table) => {
      table.bigIncrements("id").primary().index();
      table
        .string("nome", 100)
        .checkLength("<=", 100)
        .notNullable()
        .checkLength(">", 3);
      table
        .string("email", 100)
        .unique()
        .index()
        .notNullable()
        .checkLength(">", 6)
        .checkLength("<=", 100);
      table.string("senha").notNullable().checkLength(">", 5);
      table.comment("Tabela usada para armazenar usuários do sistema.");
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.usuario}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.usuario);
}
