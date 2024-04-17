import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as Yup from "yup";

import { validation } from "../../shared/middleware";

const queryValidation = Yup.object().shape({
  nome: Yup.string().required().min(3),
});

export const createValidation = validation({
  body: Yup.object().shape({
    nome: Yup.string().required().min(3),
    estado: Yup.string().required().min(3),
  }),
  query: Yup.object().shape({
    filter: Yup.string().required().min(3),
  }),
});




export const create = async (req: Request, res: Response) => {
  return res.send("Created");
};
