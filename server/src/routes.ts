import express from 'express';
import UserController from '@controllers/UserController'
import DesignController from '@controllers/DesignController'
import PhotographyController from '@controllers/PhotographyController'

const routes = express.Router();
const userController = new UserController();
const designController = new DesignController();
const photographyController = new PhotographyController();


routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);


routes.post('/design', userController.create);
routes.get('/design', userController.get);
routes.delete('/design/:id', userController.delete);
routes.put('/design/:id', userController.update);


routes.post('/photography', userController.create);
routes.get('/photography', userController.get);
routes.delete('/photography/:id', userController.delete);
routes.put('/photography/:id', userController.update);

export default routes;