import { Knex } from "../../knex";
import { IUsuario } from "../../models";
import { ETableNames } from "../../ETableNames";

export const getByEmail = async (email: string): Promise<IUsuario | Error> => {
  try {
    const result = await Knex(ETableNames.usuario)
      .select("*")
      .where("email", email)
      .first();

    if (result) return result;

    return new Error("Registro não encontrado.");
  } catch (error) {
    return new Error("Erro ao selecionar o registro.");
  }
};
