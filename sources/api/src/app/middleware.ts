import express, { Express, Request, Response, NextFunction } from 'express';
import compression from 'compression';
import cors from 'cors';
import { ErrorException } from 'utils/error-exception';

export const bootstrapMiddlewareBefore = (app: Express) => {
  app.use(express.json());
  app.use(compression());
  app.use(cors());
};

export const bootstrapMiddlewareAfter = (app: Express) => {
  // Top level error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const error = new ErrorException(err);
    res.status(error.statusCode).json(ErrorException.responseJson(error));
  });
};
