import { Request, Response } from 'express';
import { AboutUs } from '@models/AboutUs';
import { Citi, Crud } from '../global'

export default class AboutUsController implements Crud {

    async create(request: Request, response: Response){
        const {mission_title, mission_description, grid_title} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(mission_title, mission_description, grid_title);
        if(isAnyUndefined) return response.status(400).send();

        const newAboutUs = { mission_title, mission_description, grid_title };
        const {httpStatus, message} = await Citi.insertIntoDatabase(AboutUs, newAboutUs);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(AboutUs);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: aboutusFound, message } = await Citi.findByID(AboutUs, id); 
           
        if(!aboutusFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(AboutUs, aboutusFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const { mission_title, mission_description, grid_title } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(mission_title, mission_description, grid_title, id);
        if(isAnyUndefined) return response.status(400).send();

        const aboutusWithUpdatedValues = { mission_title, mission_description, grid_title };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(AboutUs, id, aboutusWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}