import { Request, Response } from 'express';
import { Audiovisual } from '@models/Audiovisual';
import { Citi, Crud } from '../global';

export default class AudiovisualController implements Crud {

    async create(request: Request, response: Response){
        const { media } = request.body

        const isAnyUndefined = Citi.areValuesUndefined(media);
        if(isAnyUndefined) return response.status(400).send();

        const newElementOfAudiovisual = { media };
        const {httpStatus, message } = await Citi.insertIntoDatabase(Audiovisual, newElementOfAudiovisual);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Audiovisual);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params
        const { value: userFound, message } = await Citi.findByID(Audiovisual, id);
        
        if (!userFound) return response.status(400).send({ message })

        const { httpStatus, messageFromDelete } = await Citi.deleteValue(Audiovisual, userFound);
        return response.status(httpStatus).send({ messageFromDelete});
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const { media } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(media, id);
        if(isAnyUndefined) return response.status(400).send();

        const audiovisualWithUpdatedValues = { media };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Audiovisual, id, audiovisualWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

}
