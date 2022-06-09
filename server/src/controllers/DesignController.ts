import { Request, Response } from 'express';
import { Design } from '@models/Design';
import { Citi, Crud } from '../global'

export default class DesignController implements Crud { 

    async create(request: Request, response: Response){
        const { media } = request.body

        const isAnyUndefined = Citi.areValuesUndefined(media);
        if(isAnyUndefined) return response.status(400).send();

        const newElementOfDesign = { media };
        const {httpStatus, message } = await Citi.insertIntoDatabase(Design, newElementOfDesign);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Design);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params
        const { value: userFound, message } = await Citi.findByID(Design, id);
        
        if (!userFound) return response.status(400).send({ message })

        const { httpStatus, messageFromDelete } = await Citi.deleteValue(Design, userFound);
        return response.status(httpStatus).send({ messageFromDelete});
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const { media } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(media, id);
        if(isAnyUndefined) return response.status(400).send();

        const designWithUpdatedValues = { media };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Design, id, designWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }
}