import { Knex } from "../../knex";
import { ICidade } from "../../models";
import { ETableNames } from "../../ETableNames";

export const getById = async (id: number): Promise<ICidade | Error> => {
  try {
    const result = await Knex(ETableNames.cidade)
      .select("*")
      .where("id", id)
      .first();

    if (result) return result;

    return new Error("Registro não encontrado.");
  } catch (error) {
    return new Error("Erro ao selecionar o registro.");
  }
};
