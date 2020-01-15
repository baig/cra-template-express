import { Request, Response, NextFunction } from 'express';
import { AuthService } from 'services/AuthService';

export class AuthGuard {
  static async privateRoute(req: Request, res: Response, next: NextFunction) {
    try {
      const decoded = await AuthService.verifyJwtToken(req);
      req.user = { id: decoded.userId };
      next();
    } catch (error) {
      next(error);
    }
  }
}
