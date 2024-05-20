import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { JWTService } from "../services/JwtService";

export const ensureAuthenticated: RequestHandler = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.includes(" ")) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: "Usuário não autenticado.",
      },
    });
  }

  const [type, token] = authorization.split(" ");

  const jwtDecoded = JWTService.verify(token);
  if (type !== "bearer" || jwtDecoded === "INVALID_TOKEN") {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: "Usuário não autenticado.",
      },
    });
  } else if (jwtDecoded === "JWT_SECRET_NOT_FOUND") {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: "Erro ao verificar o token.",
      },
    });
  }

  req.headers.idUsuario = jwtDecoded.uid.toString();
  return next();
};
