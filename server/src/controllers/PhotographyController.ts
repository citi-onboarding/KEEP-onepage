import { Request, Response } from 'express';
import { Photography } from '@models/Photography';
import { Citi, Crud } from '../global'


export default class PhotographyController implements Crud {
    
    async create(request: Request, response: Response){
        const { media } = request.body

        const isAnyUndefined = Citi.areValuesUndefined(media);
        if(isAnyUndefined) return response.status(400).send();

        const newElementOfPhotography = { media };
        const {httpStatus, message } = await Citi.insertIntoDatabase(Photography, newElementOfPhotography);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Photography);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params
        const { value: userFound, message } = await Citi.findByID(Photography, id);
        
        if (!userFound) return response.status(400).send({ message })

        const { httpStatus, messageFromDelete } = await Citi.deleteValue(Photography, userFound);
        return response.status(httpStatus).send({ messageFromDelete});
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const { media } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(media, id);
        if(isAnyUndefined) return response.status(400).send();

        const photographyWithUpdatedValues = { media };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Photography, id, photographyWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }
}