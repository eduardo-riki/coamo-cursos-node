import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { CidadeController } from "../controllers";

const router = Router();

router.post(
  "/cidade",
  CidadeController.createValidation,
  CidadeController.create
);

router.get(
  "/cidade/listar",
  CidadeController.getAllValidation,
  CidadeController.getAll
);

// router.post('/teste', (req, res) => {
//   console.log(req);

//   return res.status(StatusCodes.ACCEPTED).json(req.body);
// });

export { router };
