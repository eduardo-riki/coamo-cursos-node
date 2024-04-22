import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as Yup from "yup";

import { validation } from "../../shared/middleware";
import { ICidade } from "../../database/models";

interface IParamProps {
  id?: number;
}

interface IBodyProps extends Omit<ICidade, "id"> {}

export const updateByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    Yup.object().shape({
      id: Yup.number().integer().required().moreThan(0),
    })
  ),
  body: getSchema<IBodyProps>(
    Yup.object().shape({
      nome: Yup.string().required().min(3),
      estado: Yup.string().required().min(3),
    })
  )
}));

export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
  console.log(req.body);

  if (res.statusCode == StatusCodes.OK) {
    return res.send(req.body);
  } return res.send("Não foi possível editar a cidade.");

  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado!");
};
