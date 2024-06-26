import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as Yup from "yup";

import { validation } from "../../shared/middleware";
import { ICidade } from "../../database/models";
import { CidadeProvider } from "../../database/providers";

interface IBodyProps extends Omit<ICidade, "id"> {}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    Yup.object().shape({
      nome: Yup.string().required().min(3).max(100),
      estado: Yup.string().required().min(3).max(100),
    })
  ),
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  const result = await CidadeProvider.create(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }
  return res.status(StatusCodes.CREATED).json(result);
};