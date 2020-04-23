import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
// Repassa para o appointmentsRouter a rota appointments, desse modo,
// dentro do arquivo appointments a rota /appointments é padrão

export default routes;
