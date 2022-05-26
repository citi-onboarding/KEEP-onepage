import express from 'express';
import ServiceController from '@controllers/ServiceController';

const routes = express.Router();
const serviceController = new ServiceController();

routes.post('/service', serviceController.create);
routes.get('/service', serviceController.get);
routes.delete('/service/:id', serviceController.delete);
routes.put('/service/:id', serviceController.update);

export default routes;