import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { AnyObjectSchema, ValidationError } from "yup";

type TProperty = "body" | "header" | "params" | "query";
type TAllSchemas = Record<TProperty, AnyObjectSchema>;

type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler;

export const validation: TValidation = (schemas) => async (req, res, next) => {
  const errorsResult: Record<string, Record<string, string>> = {};

  Object.entries(schemas).forEach(([key, schema]) => {
    try {
      schema.validateSync(req[key as TProperty], { abortEarly: false });
    } catch (err) {
      const YupError = err as ValidationError;
      const errors: Record<string, string> = {};

      YupError.inner.forEach((error) => {
        if (error.path === undefined) return;
        errors[error.path] = error.message;
      });

      errorsResult[key as TProperty] = errors;

    }
    
  });
  
  if (Object.entries(errorsResult).length = 0) {
    return next();
  } else {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
  }

};
