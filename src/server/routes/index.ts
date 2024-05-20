import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { CidadeController } from "../controllers";
import { PessoaController } from "../controllers";
import { UsuarioController } from "../controllers/usuario";
import { ensureAuthenticated } from "../shared/middleware/ensureAuthenticated";

const router = Router();

router.post(
  "/cidade",
  ensureAuthenticated,
  CidadeController.createValidation,
  CidadeController.create
);
router.get(
  "/cidade/listar",
  ensureAuthenticated,
  CidadeController.getAllValidation,
  CidadeController.getAll
);
router.get(
  "/cidade/:id",
  ensureAuthenticated,
  CidadeController.getByIdValidation,
  CidadeController.getById
);
router.put(
  "/cidade/:id",
  ensureAuthenticated,
  CidadeController.updateByIdValidation,
  CidadeController.updateById
);
router.delete(
  "/cidade/:id",
  ensureAuthenticated,
  CidadeController.deleteByIdValidation,
  CidadeController.deleteById
);

//==================================================

router.post(
  "/pessoa",
  ensureAuthenticated,
  PessoaController.createValidation,
  PessoaController.create
);
router.get(
  "/pessoa/listar",
  ensureAuthenticated,
  PessoaController.getAllValidation,
  PessoaController.getAll
);
router.get(
  "/pessoa/:id",
  ensureAuthenticated,
  PessoaController.getByIdValidation,
  PessoaController.getById
);
router.put(
  "/pessoa/:id",
  ensureAuthenticated,
  PessoaController.updateByIdValidation,
  PessoaController.updateById
);
router.delete(
  "/pessoa/:id",
  ensureAuthenticated,
  PessoaController.deleteByIdValidation,
  PessoaController.deleteById
);

//==================================================

router.post(
  "/usuario/signUp",
  UsuarioController.signUpValidation,
  UsuarioController.signUp
);
router.post(
  "/usuario/signIn",
  UsuarioController.signInValidation,
  UsuarioController.signIn
);

export { router };
