import React from "react";
import { useState } from "react";

import { ContactContainer } from './styles';
import { Vector1, Vector2, Vector3, Vector4 } from '../../assets';
import axios from "axios";

export const Contact: React.ElementType = () => {

const [formValues, setFormValues] = useState({});

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
}

const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    axios.post('http://localhost:3001/email', data)
    .then(() => {
        console.log('Nenhum erro encontrado');
    })
    .catch(() => {
        console.log('Ocorreu um erro');
    })

};

    return (
        <ContactContainer>
            <div className="sidea">
                <img src={Vector1} className="vector1" />
                <img src={Vector3} className="vector3" />
            </div>
            <form onSubmit={handleSubmit}>
                <h1>Contato</h1>   
                <label>Nome</label>
                <input type="text" name="name" onChange={handleInputChange} required />
                <label>Telefone</label>
                <input type="number" name="phone" onChange={handleInputChange} required />
                <label>O que você deseja fazer?</label>
                <select name="option" style={{color: 'white'}}>
                    <option style={{display: 'none'}} value="0"></option>
                    <option style={{color: '#141414'}} value="audiovisual" >Audiovisual</option>
                    <option style={{color: '#141414'}} value="design" >Design</option>
                    <option style={{color: '#141414'}} value="fotografia" >Fotografia</option>
                    <option style={{color: '#141414'}} value="outro" >Outro assunto</option>
                    </select>
                <label>Nos conte a sua ideia! </label>
                <textarea id="text" name="message" onChange={handleInputChange} required/>

                <button type="submit">Enviar</button>
            </form> 
            <div className="sideb">
                <img src={Vector2} className="vector2" />
                <img src={Vector4} className="vector4" /> 
            </div>   
        </ContactContainer>
    );
}