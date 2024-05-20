import { Knex } from "../../knex";
import { IUsuario } from "../../models";
import { ETableNames } from "../../ETableNames";
import { PasswordCrypto } from "../../../shared/services/PasswordCrypto";

export const create = async (
  usuario: Omit<IUsuario, "id">
): Promise<number | Error> => {
  try {
    // Verifica se email existe
    const [{ count }] = await Knex(ETableNames.usuario)
      .where("email", usuario.email)
      .count<[{ count: number }]>("* as count");

    if (count > 0) {
      return new Error("Email já cadastrado.");
    }

    const hashPassword = await PasswordCrypto.hashPassword(usuario.senha);

    const [result] = await Knex(ETableNames.usuario)
      .insert({ ...usuario, senha: hashPassword })
      .returning("id");

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
