import { Request, Response } from 'express';
<<<<<<<< HEAD:server/src/controllers/ProjectsController.ts
import { Projects } from '@models/Projects';
import { Citi, Crud } from '../global'

export default class ProjectsController implements Crud {

    async create(request: Request, response: Response){
        const {title, description, image} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, description, image);
        if(isAnyUndefined) return response.status(400).send();

        const newProjects = { title, description, image };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Projects, newProjects);
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
>>>>>>>> f8180f7f37c109001642e2091f329af28d1c94b9:server/src/controllers/BannerController.ts

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
<<<<<<<< HEAD:server/src/controllers/ProjectsController.ts
        const {httpStatus, values} = await Citi.getAll(Projects);
========
        const {httpStatus, values} = await Citi.getAll(Banner);
>>>>>>>> f8180f7f37c109001642e2091f329af28d1c94b9:server/src/controllers/BannerController.ts
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
<<<<<<<< HEAD:server/src/controllers/ProjectsController.ts
        const {value: projectsFound, message } = await Citi.findByID(Projects, id); 
           
        if(!projectsFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Projects, projectsFound);
========
        const {value: bannerFound, message } = await Citi.findByID(Banner, id); 
           
        if(!bannerFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Banner, bannerFound);
>>>>>>>> f8180f7f37c109001642e2091f329af28d1c94b9:server/src/controllers/BannerController.ts
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
<<<<<<<< HEAD:server/src/controllers/ProjectsController.ts
        const {title, description, image } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, description, image, id);
        if(isAnyUndefined) return response.status(400).send();

        const projectsWithUpdatedValues = { title, description, image };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Projects, id, projectsWithUpdatedValues);
========
        const {media, title } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(media, title, id);
        if(isAnyUndefined) return response.status(400).send();

        const bannerWithUpdatedValues = { media, title };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Banner, id, bannerWithUpdatedValues);
>>>>>>>> f8180f7f37c109001642e2091f329af28d1c94b9:server/src/controllers/BannerController.ts
        return response.status(httpStatus).send({ messageFromUpdate });
    }
}