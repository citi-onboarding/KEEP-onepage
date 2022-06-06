import React from "react";
import { PortfolioContainer } from "./styles";
import { Option } from "../../components/option";
import { Grid  } from "../../components/grid";
import {Storie, Video, Imagem} from '../../assets'

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

        <section>
            <Grid
            media1 = {Imagem}
            media2 = {Imagem}
            media3 = {Imagem}
            media4 = {Imagem}
            media5 = {Video}
            media6 = {Storie}
            media7 = {Imagem}
            media8 = {Imagem}
            />

        </section>



        <button><p>Ver mais</p></button>
        </PortfolioContainer>
    );
}