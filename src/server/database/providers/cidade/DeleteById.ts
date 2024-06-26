import { Knex } from "../../knex";
import { ETableNames } from "../../ETableNames";

export const deleteById = async (id: number): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.cidade).where("id", id).del();

    if (result > 0) return;
    return new Error("Erro ao remover o registro.");
  } catch (error) {
    return new Error("Erro ao remover o registro.");
  }
};
