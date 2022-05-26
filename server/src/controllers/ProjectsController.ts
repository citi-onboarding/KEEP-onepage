import { Request, Response } from 'express';
import { Projects } from '@models/Projects';
import { Citi, Crud } from '../global'

export default class ProjectsController implements Crud {

    async create(request: Request, response: Response){
        const {title, description, image} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, description, image);
        if(isAnyUndefined) return response.status(400).send();

        const newProjects = { title, description, image };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Projects, newProjects);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Projects);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: projectsFound, message } = await Citi.findByID(Projects, id); 
           
        if(!projectsFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Projects, projectsFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {title, description, image } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, description, image, id);
        if(isAnyUndefined) return response.status(400).send();

        const projectsWithUpdatedValues = { title, description, image };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Projects, id, projectsWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}