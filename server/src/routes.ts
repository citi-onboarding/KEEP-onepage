import express from 'express';
import AboutUsController from '@controllers/AboutUsController'

const routes = express.Router();
const aboutusController = new AboutUsController();

routes.post('/aboutus', aboutusController.create);
routes.get('/aboutus', aboutusController.get);
routes.delete('/aboutus/:id', aboutusController.delete);
routes.put('/aboutus/:id', aboutusController.update);

export default routes;