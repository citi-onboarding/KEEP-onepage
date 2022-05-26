import express from 'express';
import UserController from '@controllers/UserController'
import ServiceController from '@controllers/ServiceController';

const routes = express.Router();
const userController = new UserController();
const serviceController = new ServiceController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/service', serviceController.create);


export default routes;