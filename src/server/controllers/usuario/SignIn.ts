import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as Yup from "yup";

import { validation } from "../../shared/middleware";
import { IUsuario } from "../../database/models";
import { UsuarioProvider } from "../../database/providers";
import { PasswordCrypto } from "../../shared/services/PasswordCrypto";
import { JWTService } from "../../shared/services/JwtService";

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

  const usuario = await UsuarioProvider.getByEmail(email);
  if (usuario instanceof Error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: "Email e/ou senha são inválidos",
      },
    });
  }

  const isPasswordValid = await PasswordCrypto.verifyPassword(
    senha,
    usuario.senha
  );
  if (!isPasswordValid) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: "Email e/ou senha são inválidos",
      },
    });
  }

  const accessToken = JWTService.sign({ uid: usuario.id });
  if (accessToken === "JWT_SECRET_NOT_FOUND") {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: "Erro ao gerar token de acesso.",
      },
    });
  } 
  return res.status(StatusCodes.OK).json({ accessToken });
};
