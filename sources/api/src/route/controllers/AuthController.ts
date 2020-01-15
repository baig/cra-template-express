import { Request, Response, NextFunction } from 'express';
import { UserService } from 'services/UserService';
import { AuthService } from 'services/AuthService';

export class AuthController {
  static async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, email, password } = req.body;

      const user = await UserService.createUser({ username, email, password });
      const jwtToken = AuthService.createJwtToken(user.id);

      res.status(201).json({
        token: jwtToken,
        user,
      });
    } catch (error) {
      next(error);
    }
  }

  static async signin(req: Request, res: Response, next: NextFunction) {
    try {
      const { usernameOrEmail, password } = req.body;

      const user = await UserService.checkUserByUsernameOrEmail({
        usernameOrEmail,
        password,
      });
      const jwtToken = AuthService.createJwtToken(user.id);

      res.status(201).json({
        token: jwtToken,
        user,
      });
    } catch (error) {
      next(error);
    }
  }

  static async currentUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserService.getUserById(req.user.id);
      res.status(200).json({ user });
    } catch (error) {
      next(error);
    }
  }
}
