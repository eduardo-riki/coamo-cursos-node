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
  console.log(req.body);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado!");
};
