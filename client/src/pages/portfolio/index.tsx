import React from "react";
import { PortfolioContainer } from "./styles";
import { Option } from "../../components/option";

export const Portfolio: React.FC = () => {
    return (
        <PortfolioContainer>
        <h1>Frase sobre dar uma olhada no nosso trabalho(Portifolio)</h1>

        <nav>
           <Option text = "Todos" /> 
           <Option text = "Audiovisual" /> 
           <Option text = "Fotografia" /> 
           <Option text = "Design" /> 

        </nav>

        <section>grid vai ficar aqui</section>



        <button><p>Ver mais</p></button>
        </PortfolioContainer>
    );
}