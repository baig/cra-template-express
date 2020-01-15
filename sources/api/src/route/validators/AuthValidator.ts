import { validateRequest } from 'utils/validate-request';
import { body } from 'express-validator';

export class AuthValidator {
  static signup = validateRequest([
    body('username')
      .notEmpty()
      .trim()
      .isLength({ min: 4, max: 20 })
      .isAlphanumeric()
      .customSanitizer((value: string) => value.toLowerCase()),
    body('email')
      .notEmpty()
      .trim()
      .isEmail()
      .customSanitizer((value: string) => value.toLowerCase()),
    body('password').notEmpty(),
  ]);

  static signin = validateRequest([
    body('usernameOrEmail')
      .notEmpty()
      .trim()
      .customSanitizer((value: string) => value.toLowerCase()),
    body('password').notEmpty(),
  ]);
}
