import { Request, Response } from 'express';
import { Service } from '@models/Service';
import {Citi, Crud } from '../global'

export default class ServiceController implements Crud {

    async create(request: Request, response: Response){
        const { image, title, description } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(image, title, description);
        if (isAnyUndefined) return response.status(400).send();

        const newService = { image, title, description };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Service, newService);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Service);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: serviceFound, message} = await Citi.findByID(Service, id);

        if(!serviceFound) return response.status(400).send({ message });

        const { httpStatus, messageFromDelete} = await Citi.deleteValue(Service, serviceFound);
        return response.status(httpStatus).send({ messageFromDelete});
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {image, title, description} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(image, title, description, id);
        if (isAnyUndefined) return response.status(400).send();

        const serviceWithUpdatedValues = { image, title, description};

        const {httpStatus, messageFromUpdate} = await Citi.updateValue(Service, id, serviceWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }
}