import type { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.pessoa, (table) => {
      table.bigIncrements("id").primary().index();
      table
        .string("nomeCompleto", 100)
        .index()
        .checkLength("<=", 100)
        .notNullable();
      table.string("email", 100).unique().checkLength("<=", 100).notNullable();
      table
        .bigInteger("cidadeId")
        .index()
        .notNullable()
        .references("id")
        .inTable(ETableNames.cidade)
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      table.comment("Tabela usada para armazenar pessoas do sistema.");
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.pessoa}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.pessoa);
}
