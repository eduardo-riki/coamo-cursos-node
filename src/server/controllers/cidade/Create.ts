import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as Yup from "yup";

import { validation } from "../../shared/middleware";

interface ICidade {
  nome: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICidade>(
    Yup.object().shape({
      nome: Yup.string().required().min(3),
    })
  ),
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  // console.log(res.statusCode);

  if (res.statusCode == StatusCodes.OK) {
    return res.send(req.body);
  } return res.send("Não foi possível criar a cidade.");

  // return res.status(StatusCodes.CREATED).json(1);
};
