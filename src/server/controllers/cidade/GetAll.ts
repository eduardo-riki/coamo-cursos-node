import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as Yup from "yup";

import { validation } from "../../shared/middleware";

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    Yup.object().shape({
      page: Yup.number().integer().optional().moreThan(0),
      limit: Yup.number().integer().optional().moreThan(0),
      filter: Yup.string().optional(),
    })
  ),
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  res.setHeader("access-control-expose-headers", "x-total-count");
  res.setHeader("x-total-count", 1);
  // console.log(req.body);

  if (res.statusCode == StatusCodes.OK) {
    return res.json([
      {
        id: 1,
        nome: "Goioerê",
      }
    ]);
    // return res.send(req.body);
  } return res.send("Não foi possível listar as cidades.");

  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado!");
};
