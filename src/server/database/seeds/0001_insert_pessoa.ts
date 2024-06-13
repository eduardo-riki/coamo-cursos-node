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
  { nomeCompleto: "Ana Silva", email: "ana.silva@email.com", cidadeId: 1 },
  {
    nomeCompleto: "Carlos Oliveira",
    email: "carlos.oliveira@email.com",
    cidadeId: 2,
  },
  { nomeCompleto: "Maria Souza", email: "maria.souza@email.com", cidadeId: 3 },
  {
    nomeCompleto: "João Pereira",
    email: "joao.pereira@email.com",
    cidadeId: 4,
  },
  {
    nomeCompleto: "Fernanda Santos",
    email: "fernanda.santos@email.com",
    cidadeId: 5,
  },
  { nomeCompleto: "Lucas Lima", email: "lucas.lima@email.com", cidadeId: 6 },
  {
    nomeCompleto: "Mariana Alves",
    email: "mariana.alves@email.com",
    cidadeId: 7,
  },
  {
    nomeCompleto: "Gustavo Costa",
    email: "gustavo.costa@email.com",
    cidadeId: 8,
  },
  {
    nomeCompleto: "Juliana Ferreira",
    email: "juliana.ferreira@email.com",
    cidadeId: 9,
  },
  {
    nomeCompleto: "Rafael Gomes",
    email: "rafael.gomes@email.com",
    cidadeId: 10,
  },
  {
    nomeCompleto: "Patrícia Rodrigues",
    email: "patricia.rodrigues@email.com",
    cidadeId: 11,
  },
  {
    nomeCompleto: "Ricardo Martins",
    email: "ricardo.martins@email.com",
    cidadeId: 12,
  },
  {
    nomeCompleto: "Tatiana Fernandes",
    email: "tatiana.fernandes@email.com",
    cidadeId: 13,
  },
  {
    nomeCompleto: "Bruno Ribeiro",
    email: "bruno.ribeiro@email.com",
    cidadeId: 14,
  },
  {
    nomeCompleto: "Eduardo Lima",
    email: "eduardo.lima@email.com",
    cidadeId: 15,
  },
  {
    nomeCompleto: "Larissa Alves",
    email: "larissa.alves@email.com",
    cidadeId: 16,
  },
  {
    nomeCompleto: "Marcelo Cardoso",
    email: "marcelo.cardoso@email.com",
    cidadeId: 17,
  },
  {
    nomeCompleto: "Renata Souza",
    email: "renata.souza@email.com",
    cidadeId: 18,
  },
  {
    nomeCompleto: "Felipe Santos",
    email: "felipe.santos@email.com",
    cidadeId: 19,
  },
  {
    nomeCompleto: "Bianca Costa",
    email: "bianca.costa@email.com",
    cidadeId: 20,
  },
  {
    nomeCompleto: "Thiago Ferreira",
    email: "thiago.ferreira@email.com",
    cidadeId: 21,
  },
  {
    nomeCompleto: "Vanessa Gomes",
    email: "vanessa.gomes@email.com",
    cidadeId: 22,
  },
  {
    nomeCompleto: "Rodrigo Oliveira",
    email: "rodrigo.oliveira@email.com",
    cidadeId: 23,
  },
  { nomeCompleto: "Amanda Lima", email: "amanda.lima@email.com", cidadeId: 24 },
  { nomeCompleto: "Paulo Souza", email: "paulo.souza@email.com", cidadeId: 25 },
  {
    nomeCompleto: "Camila Alves",
    email: "camila.alves@email.com",
    cidadeId: 26,
  },
  { nomeCompleto: "Igor Silva", email: "igor.silva@email.com", cidadeId: 27 },
  {
    nomeCompleto: "Gabriela Ferreira",
    email: "gabriela.ferreira@email.com",
    cidadeId: 28,
  },
  {
    nomeCompleto: "Leonardo Santos",
    email: "leonardo.santos@email.com",
    cidadeId: 29,
  },
  {
    nomeCompleto: "Juliana Oliveira",
    email: "juliana.oliveira@email.com",
    cidadeId: 30,
  },
  { nomeCompleto: "Daniel Lima", email: "daniel.lima@email.com", cidadeId: 31 },
  {
    nomeCompleto: "Marina Souza",
    email: "marina.souza@email.com",
    cidadeId: 32,
  },
  {
    nomeCompleto: "Alexandre Alves",
    email: "alexandre.alves@email.com",
    cidadeId: 33,
  },
  {
    nomeCompleto: "Sandra Costa",
    email: "sandra.costa@email.com",
    cidadeId: 34,
  },
  {
    nomeCompleto: "Rafaela Ferreira",
    email: "rafaela.ferreira@email.com",
    cidadeId: 35,
  },
  {
    nomeCompleto: "Márcio Santos",
    email: "marcio.santos@email.com",
    cidadeId: 36,
  },
  {
    nomeCompleto: "Michele Gomes",
    email: "michele.gomes@email.com",
    cidadeId: 37,
  },
  {
    nomeCompleto: "Antônio Oliveira",
    email: "antonio.oliveira@email.com",
    cidadeId: 38,
  },
  {
    nomeCompleto: "Beatriz Lima",
    email: "beatriz.lima@email.com",
    cidadeId: 39,
  },
  {
    nomeCompleto: "Victor Souza",
    email: "victor.souza@email.com",
    cidadeId: 40,
  },
  {
    nomeCompleto: "Tatiana Alves",
    email: "tatiana.alves@email.com",
    cidadeId: 41,
  },
  { nomeCompleto: "Joana Costa", email: "joana.costa@email.com", cidadeId: 42 },
  {
    nomeCompleto: "Samuel Ferreira",
    email: "samuel.ferreira@email.com",
    cidadeId: 43,
  },
  {
    nomeCompleto: "Isabela Santos",
    email: "isabela.santos@email.com",
    cidadeId: 44,
  },
  { nomeCompleto: "Fábio Gomes", email: "fabio.gomes@email.com", cidadeId: 45 },
  {
    nomeCompleto: "Carla Oliveira",
    email: "carla.oliveira@email.com",
    cidadeId: 46,
  },
  { nomeCompleto: "Diego Lima", email: "diego.lima@email.com", cidadeId: 47 },
  {
    nomeCompleto: "Simone Souza",
    email: "simone.souza@email.com",
    cidadeId: 48,
  },
  { nomeCompleto: "Lucas Alves", email: "lucas.alves@email.com", cidadeId: 49 },
  {
    nomeCompleto: "Helena Costa",
    email: "helena.costa@email.com",
    cidadeId: 50,
  },
];
