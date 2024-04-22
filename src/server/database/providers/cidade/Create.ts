import { Knex } from "../../knex";
import { ICidade } from "../../models";
import { ETableNames } from "../../ETableNames";

export const create = async (
  cidade: Omit<ICidade, "id">
): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.cidade).insert(cidade).returning("id");

    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }
    return new Error("Erro ao cadastrar o registro.");
  } catch (error) {
    return new Error("Erro ao cadastrar o registro.");
  }
};
