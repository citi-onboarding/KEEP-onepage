import { Request, Response } from 'express';
<<<<<<<< HEAD:server/src/controllers/AboutUsController.ts
import { AboutUs } from '@models/AboutUs';
import { Citi, Crud } from '../global'

export default class AboutUsController implements Crud {

    async create(request: Request, response: Response){
        const {mission_title, mission_description, grid_title} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(mission_title, mission_description, grid_title);
        if(isAnyUndefined) return response.status(400).send();

        const newAboutUs = { mission_title, mission_description, grid_title };
        const {httpStatus, message} = await Citi.insertIntoDatabase(AboutUs, newAboutUs);
========
import { Banner } from '@models/Banner';
import { Citi, Crud } from '../global'

export default class BannerController implements Crud{

    async create(request: Request, response: Response){
        const { media, title } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(media, title);
        if(isAnyUndefined) return response.status(400).send();

        const newBanner = { media, title };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Banner, newBanner);
>>>>>>>> main:server/src/controllers/BannerController.ts

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
<<<<<<<< HEAD:server/src/controllers/AboutUsController.ts
        const {httpStatus, values} = await Citi.getAll(AboutUs);
========
        const {httpStatus, values} = await Citi.getAll(Banner);
>>>>>>>> main:server/src/controllers/BannerController.ts
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
<<<<<<<< HEAD:server/src/controllers/AboutUsController.ts
        const {value: aboutusFound, message } = await Citi.findByID(AboutUs, id); 
           
        if(!aboutusFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(AboutUs, aboutusFound);
========
        const {value: bannerFound, message } = await Citi.findByID(Banner, id); 
           
        if(!bannerFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Banner, bannerFound);
>>>>>>>> main:server/src/controllers/BannerController.ts
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
<<<<<<<< HEAD:server/src/controllers/AboutUsController.ts
        const { mission_title, mission_description, grid_title } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(mission_title, mission_description, grid_title, id);
        if(isAnyUndefined) return response.status(400).send();

        const aboutusWithUpdatedValues = { mission_title, mission_description, grid_title };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(AboutUs, id, aboutusWithUpdatedValues);
========
        const {media, title } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(media, title, id);
        if(isAnyUndefined) return response.status(400).send();

        const bannerWithUpdatedValues = { media, title };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Banner, id, bannerWithUpdatedValues);
>>>>>>>> main:server/src/controllers/BannerController.ts
        return response.status(httpStatus).send({ messageFromUpdate });
    }
}