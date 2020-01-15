import jwt from 'jsonwebtoken';
import { config } from 'config';
import { Request } from 'express';
import { ErrorException } from 'utils/error-exception';
import { errorMessages } from 'constants/error-messages';

export class AuthService {
  static createJwtToken(userId: string) {
    const token = jwt.sign({ userId }, config.app.jwtSecret);
    return token;
  }

  static async verifyJwtToken(req: Request) {
    if (!req.headers.authorization) {
      throw new ErrorException(errorMessages.JWT_TOKEN_NOT_FOUND);
    }

    try {
      const authHeader = req.headers.authorization.split(' ');
      if (authHeader && authHeader[0] === 'Bearer' && authHeader[1]) {
        const decoded = jwt.verify(authHeader[1], config.app.jwtSecret) as any;
        return Promise.resolve(decoded);
      }

      throw new ErrorException(errorMessages.JWT_TOKEN_INVALID);
    } catch (error) {
      throw new ErrorException(
        error.name === jwt.TokenExpiredError.name
          ? errorMessages.JWT_TOKEN_EXPIRED
          : errorMessages.JWT_UNKNOWN,
      );
    }
  }
}
