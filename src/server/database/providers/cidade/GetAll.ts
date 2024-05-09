import { Knex } from "../../knex";
import { ICidade } from "../../models";
import { ETableNames } from "../../ETableNames";

export const getAll = async (
  page: number,
  limit: number,
  filter: string,
  id: number
): Promise<ICidade[] | Error> => {
  try {
    const result = await Knex(ETableNames.cidade)
      .select("*")
      .where("id", id)
      .orWhere("nome", "like", `%${filter}%`)
      .offset((page - 1) * limit)
      .limit(limit);

    if (id > 0 && result.every((item) => item.id !== id)) {
      const resultById = await Knex(ETableNames.cidade)
        .select("*")
        .where("id", id)
        .first();

      if (resultById) return [...result, resultById];
    }

    return result;
  } catch (error) {
    return new Error("Erro ao selecionar o registro.");
  }
};
