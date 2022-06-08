import React, {useState, useEffect} from "react";
import axios from 'axios';
import { PortfolioContainer } from "./styles";
import { Option } from "../../components/option";
import { Grid  } from "../../components/grid";

type MediaInfos = {
    media: string;
}

export const Portfolio: React.FC = () => {

    const [option, setOption] = useState<string>('all');
    const [medias, setMedias] = useState<MediaInfos[]>([]);

    const getMedias = async () => {
        const response = await axios.get(`http://localhost:3001/${option}`)
        setMedias(response.data)
    }

    useEffect(() => {
       getMedias()
    }, [option]);


    return (
        <PortfolioContainer>
        <h1>Frase sobre dar uma olhada no nosso trabalho(Portifolio)</h1>

        <nav>
           <Option text = "Todos" onClick = {() => { setOption('all') }} /> 
           <Option text = "Audiovisual" onClick = {() => { setOption('audiovisual')}}/> 
           <Option text = "Fotografia" onClick = {() => setOption('photography')}/> 
           <Option text = "Design" onClick = {() => setOption('design')}/> 
        </nav>

        <section>
            <Grid media1="https://lh3.googleusercontent.com/pw/AM-JKLUXWV_Yy9NLpRCgIHRNSaVuZ1Qb0WcHw5hKO8dPEYQ6zl3XXsQPJPJEqR80S5Ru2Lyvcih7t7ekyfj4QjRLf3yFR5PgEwpUdWzohelycrrCh35BXcViig1kfQsB2XAK5_29-l8ml4cUT0M_eaLLnEI=w359-h261-no?authuser=0"     
            media2 = "https://www.youtube.com/embed/Q3i0v26IAJg"
            media3 = {medias[2]?.media}
            media4 = {medias[3]?.media}
            media5 = "https://www.youtube.com/embed/0uFB92lXmUc"
            media6 = "https://www.youtube.com/embed/2FiKxEnET3g"
            media7 = {medias[6]?.media}
            media8 = {medias[7]?.media}/>
        </section>
        

        <button><p>Ver mais</p></button>
        </PortfolioContainer>
    );
    
}
