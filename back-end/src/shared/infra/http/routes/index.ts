import { Router } from 'express';

import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
// Repassa para o appointmentsRouter a rota appointments, desse modo,
// dentro do arquivo appointments a rota /appointments é padrão
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
