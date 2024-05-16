import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

// Step 4: Create a seed function
export const seed = async (knex: Knex) => {
  const [{ count }] = await knex(ETableNames.cidade).count<[{ count: number }]>(
    "* as count"
  );

  if (!Number.isInteger(count) || Number(count) > 0) {
    return;
  }

  const cidadesToInsert = cidades.map((cidade) => ({
    nome: cidade.nome,
    estado: cidade.estado,
  }));
  await knex(ETableNames.cidade).insert(cidadesToInsert);
};

const cidades = [
  { nome: "Apucarana", estado: "Paraná" },
  { nome: "Arapongas", estado: "Paraná" },
  { nome: "Araruna", estado: "Paraná" },
  { nome: "Araucária", estado: "Paraná" },
  { nome: "Assis Chateaubriand", estado: "Paraná" },
  { nome: "Barbosa Ferraz", estado: "Paraná" },
  { nome: "Boa Esperança", estado: "Paraná" },
  { nome: "Cafelândia", estado: "Paraná" },
  { nome: "Califórnia", estado: "Paraná" },
  { nome: "Campo Mourão", estado: "Paraná" },
  { nome: "Curitiba", estado: "Paraná" },
  { nome: "Goioerê", estado: "Paraná" },
  { nome: "Maringá", estado: "Paraná" },
  { nome: "Quarto Centenário", estado: "Paraná" },
  { nome: "Santana do Itararé", estado: "Paraná" },
  { nome: "Wenceslau Braz", estado: "Paraná" },
];