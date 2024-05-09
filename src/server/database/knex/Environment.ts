import { Knex } from "knex";
import path from "path";
import "dotenv/config";

export const development: Knex.Config = {
  client: "pg",
  useNullAsDefault: true,
  connection: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    ssl: { rejectUnauthorized: false },
  },
  migrations: {
    directory: path.resolve(__dirname, "..", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "..", "seeds"),
  },
  pool: {
    afterCreate: (connection: any, done: Function) => {
      connection.query("SET CONSTRAINTS ALL IMMEDIATE;", (error: any) => {
        if (error) {
          console.error("Error enabling foreign key constraints:", error);
        }
      });
      done();
    },
  },
};

export const test: Knex.Config = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: ":memory:",
  },
  migrations: {
    directory: path.resolve(__dirname, "..", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "..", "seeds"),
  },
  pool: {
    afterCreate: (connection: any, done: Function) => {
      connection.run("PRAGMA foreign_keys = ON");
      done();
    },
  },
};

export const production: Knex.Config = {
  ...development,
};
