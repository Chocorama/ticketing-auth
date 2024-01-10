import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authored-error';

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }

  //   if user is logged in from the currentUser middleware and gets passed this if check above,  they may proceed to regular route handler function
  next();
};
