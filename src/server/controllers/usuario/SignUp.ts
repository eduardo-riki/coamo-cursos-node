import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as Yup from "yup";

import { validation } from "../../shared/middleware";
import { IUsuario } from "../../database/models";
import { UsuarioProvider } from "../../database/providers";

interface IBodyProps extends Omit<IUsuario, "id"> {}

export const signUpValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    Yup.object().shape({
      nome: Yup.string().required().min(3).max(100),
      email: Yup.string().required().email(),
      senha: Yup.string().required().min(6),
    })
  ),
}));

export const signUp = async (req: Request<{}, {}, IUsuario>, res: Response) => {
  const result = await UsuarioProvider.create(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }
  return res.status(StatusCodes.OK).json(result);
};