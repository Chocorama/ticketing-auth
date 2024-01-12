import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/custom-error';

// catches all errors and Custom erros with the status code we added as an abstract
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  // res.status(400).send({ message: err.message });
};
