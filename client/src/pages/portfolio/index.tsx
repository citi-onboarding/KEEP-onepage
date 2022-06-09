import React, {useState, useEffect} from "react";
import axios from 'axios';
import { PortfolioContainer } from "./styles";
import { Option } from "../../components/option";
import { Grid  } from "../../components/grid";

type MediaInfos = {
    media: string;
     
}

export const Portfolio: React.FC = () => {
    /*
    const tags = []
    
    function isVideo(item: MediaInfos, index: number ) {
        if(item.media.indexOf('youtube') !== -1){
            return tags.push(`<iframe src={media${index}}><iframe/>`);
        }
        else return tags.push(`<img src={media${index}}/>`);
    
    }
    */
    const [option, setOption] = useState<string>('all');
    const [medias, setMedias] = useState<MediaInfos[]>([]);
    

    const getMedias = async () => {
        const response = await axios.get(`http://localhost:3001/${option}`)
        setMedias(response.data)
    }

    useEffect(() => {
       getMedias()
    }, [option]);

    /*
    useEffect(() => {
        medias.map(isVideo())
     }, [medias]);
    */
    
    

    return (
        <PortfolioContainer>

        <nav>
           <Option text = "Todos" onClick = {() => { setOption('all') }} /> 
           <Option text = "Audiovisual" onClick = {() => { setOption('audiovisual')}}/> 
           <Option text = "Fotografia" onClick = {() => setOption('photography')}/> 
           <Option text = "Design" onClick = {() => setOption('design')}/> 
        </nav>

        <section>
            <Grid 
            //tag1 = {tags[0]} 
            media1={medias[0]?.media}     
            media2 = {medias[1]?.media}
            media3 = {medias[2]?.media}
            media4 = {medias[3]?.media}
            media5 = {medias[4]?.media}
            media6 = {medias[5]?.media}
            media7 = {medias[6]?.media}
            media8 = {medias[7]?.media}/>
        </section>
        

        <button><p>Ver mais</p></button>
        </PortfolioContainer>
    );
    
}
