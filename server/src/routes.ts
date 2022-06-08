import express from 'express';

import DesignController from '@controllers/DesignController'
import PhotographyController from '@controllers/PhotographyController'
import BannerController from '@controllers/BannerController'
import AllController from '@controllers/AllController';
import AudiovisualController from '@controllers/AudiovisualController';

const routes = express.Router();

const designController = new DesignController();
const photographyController = new PhotographyController();
const allController = new AllController();
const audiovisualController = new AudiovisualController();
const bannerController = new BannerController();


routes.post('/banner', bannerController.create);
routes.get('/banner', bannerController.get);
routes.delete('/banner/:id', bannerController.delete);
routes.put('/banner/:id', bannerController.update);

routes.post('/design', designController.create);
routes.get('/design', designController.get);
routes.delete('/design/:id', designController.delete);
routes.put('/design/:id', designController.update);

routes.post('/photography', photographyController.create);
routes.get('/photography', photographyController.get);
routes.delete('/photography/:id', photographyController.delete);
routes.put('/photography/:id', photographyController.update);

routes.post('/all', allController.create);
routes.get('/all', allController.get);
routes.delete('/all/:id', allController.delete);
routes.put('/all/:id', allController.update);

routes.post('/audiovisual', audiovisualController.create);
routes.get('/audiovisual', audiovisualController.get);
routes.delete('/audiovisual/:id', audiovisualController.delete);
routes.put('/audiovisual/:id', audiovisualController.update);

export default routes;