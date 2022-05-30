import express from 'express';
import BannerController from '@controllers/BannerController'

const routes = express.Router();
const bannerController = new BannerController();

routes.post('/banner', bannerController.create);
routes.get('/banner', bannerController.get);
routes.delete('/banner/:id', bannerController.delete);
routes.put('/banner/:id', bannerController.update);


export default routes;