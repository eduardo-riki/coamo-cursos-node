import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as Yup from "yup";

import { validation } from "../../shared/middleware";

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
  console.log(req.params);

  if (res.statusCode == StatusCodes.OK) {
    return res.send(req.body);
  } return res.send("Não foi possível deletar a cidade.");

  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado!");
};
