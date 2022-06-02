import express from 'express';
import DesignController from '@controllers/DesignController'
import PhotographyController from '@controllers/PhotographyController'

const routes = express.Router();
const designController = new DesignController();
const photographyController = new PhotographyController();


routes.post('/design', designController.create);
routes.get('/design', designController.get);
routes.delete('/design/:id', designController.delete);
routes.put('/design/:id', designController.update);


routes.post('/photography', photographyController.create);
routes.get('/photography', photographyController.get);
routes.delete('/photography/:id', photographyController.delete);
routes.put('/photography/:id', photographyController.update);

export default routes;