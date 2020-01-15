import { Router } from 'express';

import { AuthGuard } from './middleware/AuthGuard';
import { AuthController } from './controllers/AuthController';
import { AuthValidator } from './validators/AuthValidator';

const router = Router();

router.post('/signup', AuthValidator.signup, AuthController.signup);
router.post('/signin', AuthValidator.signin, AuthController.signin);
router.get('/me', AuthGuard.privateRoute, AuthController.currentUser);

export { router as apiRoutes };
