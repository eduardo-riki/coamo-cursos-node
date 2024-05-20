import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as Yup from "yup";

import { validation } from "../../shared/middleware";
import { IUsuario } from "../../database/models";
import { UsuarioProvider } from "../../database/providers";
import { PasswordCrypto } from "../../shared/services/PasswordCrypto";

interface IBodyProps extends Omit<IUsuario, "id" | "nome"> {}

export const signInValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    Yup.object().shape({
      email: Yup.string().required().email(),
      senha: Yup.string().required().min(6),
    })
  ),
}));

export const signIn = async (req: Request<{}, {}, IUsuario>, res: Response) => {
  const { email, senha } = req.body;
  const result = await UsuarioProvider.getByEmail(email);

  if (result instanceof Error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: "Email e/ou senha são inválidos",
      },
    });
  }

  if (!(await PasswordCrypto.verifyPassword(senha, result.senha))) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: "Email e/ou senha são inválidos",
      },
    });
  }
  
  return res.status(StatusCodes.OK).json({ accessToken: "teste" });
};