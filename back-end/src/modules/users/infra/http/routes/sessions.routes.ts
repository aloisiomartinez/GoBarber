import { Router } from 'express';

import SessionsController from '../controllers/SessionsController';

const sessionsControllers = new SessionsController();

const sessionsRouter = Router();

sessionsRouter.post('/', sessionsControllers.create);

export default sessionsRouter;
