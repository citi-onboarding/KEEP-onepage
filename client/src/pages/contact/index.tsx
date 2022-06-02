import React from "react";

import { ContactContainer, Form } from './styles';
import { Vector1, Vector2, Vector3, Vector4 } from '../../assets';

export const Contact: React.FC = () => {
    return (
        <ContactContainer>
            <div className="sidea">
                <img src={Vector1} className="vector1" />
                <img src={Vector3} className="vector3" />
            </div>
            <Form>
                <h1>Contato</h1>   
                <label>Nome</label>
                <input type="text" id="name" name="user_name"></input>
                <label>Telefone</label>
                <input type="phone" id="phone" name="phone"></input>
                <label>O que você deseja fazer?</label>
                
                <select style={{color: 'white'}}>
                    <option style={{display: 'none'}} value="0" ></option>
                    <option style={{color: 'black'}} value="1" >Option 1</option>
                    <option style={{color: 'black'}} value="2">Option 2</option>
                    <option style={{color: 'black'}} value="3">Option 3</option>
                    </select>
        
                <label>Nos conte a sua ideia! </label>
                <textarea id="text" name="text"></textarea>

                <button type="button">Enviar</button>
            </Form> 
            <div className="sideb">
                <img src={Vector2} className="vector2" />
                <img src={Vector4} className="vector4" /> 
            </div>   
        </ContactContainer>
    );
}