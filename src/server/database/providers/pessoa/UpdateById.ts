import { Knex } from "../../knex";
import { IPessoa } from "../../models";
import { ETableNames } from "../../ETableNames";

export const updateById = async (
  id: number,
  pessoa: Omit<IPessoa, "id">
): Promise<void | Error> => {
  try {
    // Verifica se cidade existe
    const [{ count }] = await Knex(ETableNames.cidade)
      .where("id", "=", pessoa.cidadeId)
      .count<[{ count: number }]>("* as count");

    if (count === 0) {
      return new Error("A cidade usada no cadastro não foi encontrada");
    }
    
    const result = await Knex(ETableNames.pessoa)
      .where("id", id)
      .update(pessoa);

    if (result > 0) return;

    return new Error("Erro ao atualizar o registro.");
  } catch (error) {
    return new Error("Erro ao atualizar o registro.");
  }
};
