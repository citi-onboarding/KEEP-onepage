import { Request, Response } from 'express';
import { AboutUs } from '@models/AboutUs';
import { Citi, Crud } from '../global'

export default class AboutUsController implements Crud {

    async create(request: Request, response: Response){
        const {title, description} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, description);
        if(isAnyUndefined) return response.status(400).send();

        const newAboutUs = { title, description };
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
        const {title, description } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, description, id);
        if(isAnyUndefined) return response.status(400).send();

        const aboutusWithUpdatedValues = { title, description };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(AboutUs, id, aboutusWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}