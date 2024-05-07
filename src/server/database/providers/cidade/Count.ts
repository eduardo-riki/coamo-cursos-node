import { Knex } from "../../knex";
import { ETableNames } from "../../ETableNames";

export const count = async (filter: string): Promise<number | Error> => {
  try {
    const [{ count }] = await Knex(ETableNames.cidade)
      .where("nome", "like", `%${filter}%`)
      .count<[{ count: number }]>("* as count");

    if (Number.isInteger(Number(count))) return Number(count);

    return new Error("Erro ao consultar a quantidade total de registro.");
  } catch (error) {
    return new Error("Erro ao consultar a quantidade total de registro.");
  }
};
