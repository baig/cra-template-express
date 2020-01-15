declare namespace Express {
  interface Request {
    user?: any;
  }
}

interface ErrorExceptionParams {
  code: string;
  statusCode?: number;
  message?: string;
  errors?: any[];
}
