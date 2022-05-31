import React from "react";
import { ContactContainer } from './styles';


export const Contact: React.FC = () => {
    return (
        <ContactContainer>
         <h1>Contato</h1>  

         <p>Nome</p> 

         <p>Telefone</p> 

         <p>O que você deseja?</p> 

         <p>Nos conte a sua ideia!</p> 
            
        </ContactContainer>
    );
}