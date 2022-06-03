import express from 'express';
import BannerController from '@controllers/BannerController'
import AllController from '@controllers/AllController';
import AudiovisualController from '@controllers/AudiovisualController';

const routes = express.Router();
const allController = new AllController();
const audiovisualController = new AudiovisualController();
const routes = express.Router();
const bannerController = new BannerController();


routes.post('/banner', bannerController.create);
routes.get('/banner', bannerController.get);
routes.delete('/banner/:id', bannerController.delete);
routes.put('/banner/:id', bannerController.update);


routes.post('/all', allController.create);
routes.get('/all', allController.get);
routes.delete('/all/:id', allController.delete);
routes.put('/all/:id', allController.update);


routes.post('/audiovisual', audiovisualController.create);
routes.get('/audiovisual', audiovisualController.get);
routes.delete('/audiovisual/:id', audiovisualController.delete);
routes.put('/audiovisual/:id', audiovisualController.update);

export default routes;