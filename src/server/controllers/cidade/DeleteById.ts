import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as Yup from "yup";

import { validation } from "../../shared/middleware";
import { CidadeProvider } from "../../database/providers";

interface IParamProps {
  id?: number;
}

export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    Yup.object().shape({
      id: Yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
  const result = await CidadeProvider.deleteById(Number(req.params));

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }
  return res.status(StatusCodes.OK).json("Registro removido com sucesso.");

  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado!");
};
