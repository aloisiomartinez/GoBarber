import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
// Repassa para o appointmentsRouter a rota appointments, desse modo,
// dentro do arquivo appointments a rota /appointments é padrão
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
