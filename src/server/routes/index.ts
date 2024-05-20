import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { CidadeController } from "../controllers";
import { PessoaController } from "../controllers";
import { UsuarioController } from "../controllers/usuario";

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

router.get(
  "/cidade/:id",
  CidadeController.getByIdValidation,
  CidadeController.getById
);

router.put(
  "/cidade/:id",
  CidadeController.updateByIdValidation,
  CidadeController.updateById
);

router.delete(
  "/cidade/:id",
  CidadeController.deleteByIdValidation,
  CidadeController.deleteById
);

//==================================================

router.post(
  "/pessoa",
  PessoaController.createValidation,
  PessoaController.create
);

router.get(
  "/pessoa/listar",
  PessoaController.getAllValidation,
  PessoaController.getAll
);

router.get(
  "/pessoa/:id",
  PessoaController.getByIdValidation,
  PessoaController.getById
);

router.put(
  "/pessoa/:id",
  PessoaController.updateByIdValidation,
  PessoaController.updateById
);

router.delete(
  "/pessoa/:id",
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
