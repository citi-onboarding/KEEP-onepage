import { Request, Response } from 'express';
import { All } from '@models/All';
import { Citi, Crud } from '../global';

export default class AllController implements Crud {

    async create(request: Request, response: Response){
        const { url } = request.body

        const isAnyUndefined = Citi.areValuesUndefined(url);
        if(isAnyUndefined) return response.status(400).send();

        const newElementOfAll = { url };
        const {httpStatus, message } = await Citi.insertIntoDatabase(All, newElementOfAll);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(All);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params
        const { value: userFound, message } = await Citi.findByID(All, id);
        
        if (!userFound) return response.status(400).send({ message })

        const { httpStatus, messageFromDelete } = await Citi.deleteValue(All, userFound);
        return response.status(httpStatus).send({ messageFromDelete});
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const { url } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(url, id);
        if(isAnyUndefined) return response.status(400).send();

        const allWithUpdatedValues = { url };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(All, id, allWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

}
