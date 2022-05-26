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
}