import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as Yup from "yup";

import { validation } from "../../shared/middleware";
import { ICidade } from "../../database/models";

interface IBodyProps extends Omit<ICidade, "id"> {}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    Yup.object().shape({
      nome: Yup.string().required().min(3),
      estado: Yup.string().required().min(3),
    })
  ),
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  // console.log(res.statusCode);

  if (res.statusCode == StatusCodes.OK) {
    return res.send(req.body);
  }
  return res.send("Não foi possível criar a cidade.");

  // return res.status(StatusCodes.CREATED).json(1);
};
