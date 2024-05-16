import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as Yup from "yup";

import { validation } from "../../shared/middleware";
import { IPessoa } from "../../database/models";
import { PessoaProvider } from "../../database/providers";

interface IBodyProps extends Omit<IPessoa, "id"> {}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    Yup.object().shape({
      nomeCompleto: Yup.string().required().min(3).max(100),
      email: Yup.string().required().email(),
      cidadeId: Yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const create = async (req: Request<{}, {}, IPessoa>, res: Response) => {
  const result = await PessoaProvider.create(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }
  return res.status(StatusCodes.CREATED).json(result);
};