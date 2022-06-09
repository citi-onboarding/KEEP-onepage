import { MailServer } from "src/services/MailServer";
import dotenv from "dotenv";
import {Request, Response} from "express";

dotenv.config();

const SendMail = async (request : Request, response: Response) => {
    try {
        const {name, phone, option, message } = request.body;

        await MailServer({
            destinationUser: process.env.EMAIL_WILL_RECEIVE,
            subjectText: `${name} | ${option} - Formulário de Contato`,
            htmlOption: `Uma pessoa entrou em contato através do formulário de contato do site. <br><br> Nome: ${name}<br><br>Telefone: ${phone}<br><br>Opção de contato: ${option}<br><br>Mensagem: ${message}`
        })

        return response.status(200).send({
            answer: "Enviado."
        })

    } catch(error){
        return response.status(500).send({
            answer: "Desculpe, houve algum tipo de problema."
        })

    }

}

export {
    SendMail
}